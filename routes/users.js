const express = require('express');

const validator = require('../validators/users');
const jwt = require('../utils/jwt');
const usersController = require('../controllers/users');
const ConflictError = require('../helpers/errors/conflict_error');
const NotFoundError = require('../helpers/errors/not_found_error');
const UnauthorizedError = require('../helpers/errors/unauthorized_error');
const { OK, CREATED } = require('../helpers/status_codes');

const router = express.Router();

router.get('/me', jwt.verifyToken, async (req, res) => {
	const { userId } = req.user;

	const userFound = await usersController.findUserById(userId);

	if (userFound) {
		res.status(OK).json({
			user: {
				name: userFound.name,
			},
		});
	} else {
		throw new UnauthorizedError('Accès refusé', "Nous n'avons pas réussi à vous identifier");
	}
});

router.post('/signup', async (req, res) => {
	const { username, email, name, password, newsletter } = req.body;

	validator.validateUsername(username);
	validator.validateName(name);
	validator.validatePassword(password);
	validator.validateEmail(email);

	const userFound = await usersController.checkUsername(username);

	if (userFound === null) {
		const newUser = await usersController.addUser(req.body);

		res.status(CREATED).json({
			username: newUser.username,
			email: newUser.email,
			name: newUser.name,
		});
	} else {
		throw new ConflictError('Conflict', 'This username is already taken');
	}
});

router.post('/signin', async (req, res) => {
	const { username, password } = req.body;
	const userFound = await usersController.findUserByUsername(username);

	if (userFound) {
		const userIdentified = await usersController.checkPassword(password, userFound.password);

		if (userIdentified) {
			res.status(OK).json({
				token: jwt.genToken(userFound),
				user: {
					username: userFound.username,
					email: userFound.email,
					name: userFound.name,
				},
			});
		} else {
			throw new UnauthorizedError('Acces denied', 'Wrong username or password');
		}
	} else {
		throw new UnauthorizedError('Acces denied', 'Wrong username or password');
	}
});

router.delete('/delete', jwt.verifyToken, async (req, res) => {
	const { userId } = req.user;

	const userDeleted = await usersController.deleteUser(userId);

	if (!userDeleted) {
		throw new NotFoundError();
	} else {
		res.status(OK).json({
			message: 'Your account has been deleted.',
		});
	}
});

module.exports = router;
