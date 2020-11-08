const { isNil } = require('lodash');

const BadRequestError = require('../helpers/errors/bad_request_error');

const USERNAME_REGEX = /^[a-zA-Z0-9_-]{1,12}$/;
const PASSWORD_REGEX = /^(?=.*\d).{6,20}$/;

module.exports = (data) => {
	const { username, password } = data;

	if (
		!USERNAME_REGEX.test(username) ||
		username.length >= 13 ||
		username.length < 1 ||
		isNil(username) ||
		username === ''
	) {
		throw new BadRequestError('Bad Request', 'Invalid username');
	}

	if (!PASSWORD_REGEX.test(password) || password.length < 6 || isNil(password) || password === '') {
		throw new BadRequestError('Bad Request', 'Invalid password');
	}
};
