const express = require('express');

const showsController = require('../controllers/shows');
const { OK, CREATED } = require('../helpers/status_codes');
const jwt = require('../utils/jwt');

const router = express.Router();

router.get('/find', (req, res) => {
	const { title } = req.body;

	const showFound = showsController.findShow(title);

	if (showFound) {
		res.status(OK).json({
			title: showFound.title,
		});
	} else {
		res.status(OK).json({
			message: 'Show not found, please add it.',
		});
	}
});

router.post('/add', jwt.verifyToken, async (req, res) => {
	const { title, tmdbId } = req.body;
	const { userId } = req.user;

	const showAdded = await showsController.addShow(title, tmdbId);

	if (showAdded) {
		res.status(CREATED).json({
			title: showAdded.title,
			tmdbId: showAdded.tmdbId,
		});
	}
});

module.exports = router;
