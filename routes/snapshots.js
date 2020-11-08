const express = require('express');

const jwt = require('../utils/jwt');
const snapsController = require('../controllers/snapshots');
const usersController = require('../controllers/users');

const NotFoundError = require('../helpers/errors/not_found_error');
const { OK, NO_CONTENT } = require('../helpers/status_codes');

const router = express.Router();

router.get('/random', jwt.verifyToken, async (req, res) => {
	const { userId } = req.user;

	const answered = (await usersController.findAnsweredSnaps(userId)).answered;

	const snapFound = await snapsController.findUnanswered(answered);

	if (!snapFound) {
		throw new NotFoundError(undefined, "You've found all our snapshots");
	}

	if (snapFound) {
		res.status(OK).json({
			id: snapFound.id,
		});
	}
});

router.get('/mostrecent', jwt.verifyToken, async (req, res) => {
	const recentSnapsFound = await snapsController.findRecentSnaps();

	if (recentSnapsFound) {
		res.status(OK).json(recentSnapsFound);
	}
});

router.get('/checkstatus/:snapId', jwt.verifyToken, async (req, res) => {
	const { userId } = req.user;
	const { snapId } = req.params;

	const answered = (await usersController.findAnsweredSnaps(userId)).answered;

	if (answered) {
		const snapAnswered = answered.find((snap) => snap === snapId);

		if (snapAnswered) {
			res.status(OK).json({
				answered: true,
			});
		} else {
			res.status(OK).json({
				answered: false,
			});
		}
	} else {
		res.status(OK).json({
			answered: false,
		});
	}
});

router.get('/:snapId', jwt.verifyToken, async (req, res) => {
	const { snapId } = req.params;

	const snapFound = await snapsController.findSnap(snapId);

	if (snapFound) {
		res.status(OK).json({
			path: snapFound.path,
			postedBy: snapFound['poster.username'],
			firstSolvedBy: snapFound['solver.username'],
			solved: snapFound.solved,
		});
	}
});

router.get('/:showId', async (req, res) => {
	const { showId } = req.params;

	const snapsFound = await snapsController.findShowSnaps(showId);

	if (snapsFound) {
		res.status(OK).json(snapsFound);
	}
});

router.post('/guess/:snapId', jwt.verifyToken, async (req, res) => {
	const { userId } = req.user;
	const { snapId } = req.params;
	const { guess } = req.body;

	const result = await snapsController.verifyGuess(snapId, guess);

	if (result) {
		const snapUpdated = await snapsController.updateSnap(userId, snapId);

		if (snapUpdated) {
			await usersController.addAnswer(userId, snapId);
			res.status(OK).json({
				guess: true,
			});
		}
	} else {
		res.status(OK).json({
			guess: false,
		});
	}
});

module.exports = router;
