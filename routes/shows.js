const express = require('express');

const showsController = require('../controllers/shows');
const { OK, CREATED, NOT_FOUND } = require('../helpers/status_codes');
const jwt = require('../utils/jwt');

const router = express.Router();

router.get('/find', jwt.verifyToken, async (req, res) => {
	const { title } = req.body;

	const showFound = await showsController.findShow(title);

	if (showFound) {
		res.status(OK).json({
			title: showFound.title,
			id: showFound.id,
			tmdbId: showFound.tmdbId,
		});
	} else {
		res.status(NOT_FOUND).json({
			message: 'Show not found, please add it.',
		});
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
