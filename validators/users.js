const { isNil } = require('lodash');

const BadRequestError = require('../helpers/errors/bad_request_error');

const EMAIL_REGEX = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const PASSWORD_REGEX = /^(?=.*\d).{4,12}$/;
const COUNTRY_REGEX = /[A-Za-zÀ-ÖØ-öø-ÿ -]/;
const DATE_REGEX = /([12]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01]))/;

module.exports = (data) => {
	const { username, email, password, birthday, country, gender, newsletter, terms } = data;

	if (username.length >= 13 || username.length <= 3 || isNil(username) || username === '') {
		throw new BadRequestError(
			'Bad Request',
			'Username must be at least 4 characters long & no longer than 12 characters'
		);
	}

	if (!EMAIL_REGEX.test(email) || email.length === 0 || isNil(email) || email === '') {
		throw new BadRequestError('Bad Request', 'Email must not contain invalid characters');
	}

	if (!PASSWORD_REGEX.test(password) || password.length < 6 || isNil(password) || password === '') {
		throw new BadRequestError(
			'Bad Request',
			'Password must not contain invalid characters and be 6 characters or more'
		);
	}

	if (!DATE_REGEX.test(birthday) && birthday !== '' && !isNil(birthday)) {
		throw new BadRequestError('Bad Request', 'Birthday must not contain invalid characters');
	}

	if (!COUNTRY_REGEX.test(country) && country !== '') {
		throw new BadRequestError('Bad Request', 'Country must not contain invalid characters');
	}

	if (
		gender !== 'Male' &&
		gender !== 'Female' &&
		gender !== 'Other' &&
		gender !== '' &&
		!isNil(birthday)
	) {
		throw new BadRequestError('Bad Request', 'Gender must not contain invalid characters');
	}

	if (typeof newsletter !== 'boolean') {
		throw new BadRequestError('Bad Request', 'Newsletter is invalid');
	}

	if (typeof terms !== 'boolean') {
		throw new BadRequestError('Bad Request', 'Terms is invalid');
	}
};
