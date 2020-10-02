const express = require('express');

const { OK } = require('../helpers/status_codes');

const router = express.Router();

router.get('/find', (req, res) => {
	const { title } = req.body;
});

router.post('/add', (req, res) => {
	const { title } = req.body;

	const showAdded = showsController.addShow(title);

	if (showAdded) {
		res.status(OK).json({});
	}
});
