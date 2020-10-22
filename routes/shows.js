const express = require('express');

const showsController = require('../controllers/shows');
const NotFoundError = require('../helpers/errors/not_found_error');
const { OK, CREATED } = require('../helpers/status_codes');
const jwt = require('../utils/jwt');

const router = express.Router();

router.post('/find', jwt.verifyToken, async (req, res) => {
	console.log(req.body);
	const { title } = req.body;

	const showFound = await showsController.findShow(title);

	if (showFound) {
		res.status(OK).json({
			title: showFound.title,
			id: showFound.id,
			tmdbId: showFound.tmdbId,
		});
	} else {
		throw new NotFoundError(undefined, "Oops, we can't find that show, why don't you add it?");
	}
});

router.post('/add', jwt.verifyToken, async (req, res) => {
	const { title, tmdbId } = req.body;
	const { userId } = req.user;

	const showAdded = await showsController.addShow(title, tmdbId, userId);

	if (showAdded) {
		res.status(CREATED).json({
			title: showAdded.title,
			tmdbId: showAdded.tmdbId,
		});
	}
});

module.exports = router;
