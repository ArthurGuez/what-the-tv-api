const express = require('express');

const jwt = require('../utils/jwt');
const snapsController = require('../controllers/snapshots');
const usersController = require('../controllers/users');
const { OK } = require('../helpers/status_codes');

const router = express.Router();

router.get('/random', jwt.verifyToken, async (req, res) => {
	const { userId } = req.user;

	const answered = (await usersController.findAnswered(userId)).answered;

	const snapFound = await snapsController.findUnanswered(answered);

	if (snapFound) {
		res.status(OK).json({
			id: snapFound.id,
			path: snapFound.path,
		});
	}
});

router.get('/:showId', async (req, res) => {
	const { showId } = req.params;

	const snapsFound = await snapsController.findShowSnaps(showId);
});

router.post('/:snapId/guess', jwt.verifyToken, async (req, res) => {
	const { userId } = req.user;
	const { snapId } = req.params;
	const { guess } = req.body;

	const result = await snapsController.verifyGuess(snapId, guess);

	if (result) {
		await usersController.addAnswer(userId, snapId);
		res.status(OK).json({
			title: result,
		});
	} else {
		res.status(OK).json({
			message: 'Wrong answer',
		});
	}
});

router.post('/add', (req, res) => {});

module.exports = router;
