const express = require('express');

const jwt = require('../utils/jwt');
const episodesController = require('../controllers/episodes');
const { CREATED } = require('../helpers/status_codes');

const router = express.Router();

router.post('/add', jwt.verifyToken, async (req, res) => {
	const { seasonId, number, title } = req.body;

	const episodeAdded = await episodesController.addEpisode(seasonId, number, title);

	if (episodeAdded) {
		res.status(CREATED).json({
			id: episodeAdded[0].id,
			title: episodeAdded[0].title,
		});
	}
});

module.exports = router;
