const express = require('express');

const jwt = require('../utils/jwt');
const snapController = require('../controllers/snapshots');
const usersController = require('../controllers/users');
const users = require('../validators/users');
const { OK } = require('../helpers/status_codes');

const router = express.Router();

router.get('/random', jwt.verifyToken, async (req, res) => {
	const { userId } = req.user;

	const answered = await usersController.findAnswered(userId);

	const snapFound = await snapController.findUnanswered(answered.answered);

	if (snapFound) {
		res.status(OK).json({
			path: snapFound.id,
		});
	}
});

router.get('/checkanswer', async (req, res) => {});

router.get('/:snapshotId', async (req, res) => {
	// const snapFound = await
});

module.exports = router;
