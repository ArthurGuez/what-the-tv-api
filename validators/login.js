const { isNil } = require('lodash');

const USERNAME_REGEX = /^[a-zA-Z0-9_-]{1,12}$/;
const PASSWORD_REGEX = /^(?=.*\d).{6,20}$/;

const usernameValidation = (username) => {
	if (
		!USERNAME_REGEX.test(username) ||
		username.length >= 13 ||
		username.length < 1 ||
		isNil(username) ||
		username === ''
	) {
		return 'Invalid username';
	}
	return null;
};

const passwordValidation = (password) => {
	if (!PASSWORD_REGEX.test(password) || password.length < 6 || isNil(password) || password === '') {
		return 'Invalid password';
	}
	return null;
};

module.exports = (data) => {
	const { username, password } = data;
	const errors = [];

	const usernameError = usernameValidation(username);
	if (usernameError) errors.push({ field: 'username', message: usernameError });

	const passwordError = passwordValidation(password);
	if (passwordError) errors.push({ field: 'password', message: passwordError });

	return errors.length > 0 ? errors : null;
};
