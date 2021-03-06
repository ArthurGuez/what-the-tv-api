const express = require('express');

const jwt = require('../utils/jwt');
const seasonsController = require('../controllers/seasons');
const { CREATED } = require('../helpers/status_codes');

const router = express.Router();

router.post('/add', jwt.verifyToken, async (req, res) => {
	const { showId, number } = req.body;

	const seasonAdded = await seasonsController.addSeason(showId, number);

	if (seasonAdded) {
		res.status(CREATED).json({
			id: seasonAdded[0].id,
		});
	}
});

module.exports = router;
