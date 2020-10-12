const BadRequestError = require('../helpers/errors/bad_request_error');

module.exports = {
	validateUsername: (username) => {
		if (username.length >= 13 || username.length <= 3) {
			throw new BadRequestError(
				'Bad Request',
				'Username must be at least 4 characters long & no longer than 12 characters'
			);
		}
	},

	validateName: (name) => {
		if (name.length === 0) {
			throw new BadRequestError('Bad Request', 'Name is missing');
		}
	},

	validateEmail: (email) => {
		const EMAIL_REGEX = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

		if (!EMAIL_REGEX.test(email) || email.length === 0) {
			throw new BadRequestError('Bad Request', 'Email must not contain invalid characters');
		}
	},

	validatePassword: (password) => {
		const PASSWORD_REGEX = /^(?=.*\d).{4,12}$/;

		if (!PASSWORD_REGEX.test(password) || password.length < 6) {
			throw new BadRequestError(
				'Bad Request',
				'Password must not contain invalid characters and be 6 characters or more'
			);
		}
	},
};
