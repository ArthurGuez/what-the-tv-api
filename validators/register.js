const { isNil } = require('lodash');

const USERNAME_REGEX = /^[a-zA-Z0-9_-]{1,12}$/;
const EMAIL_REGEX = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const PASSWORD_REGEX = /^(?=.*\d).{6,20}$/;
const COUNTRY_REGEX = /^[A-Za-zÀ-ÖØ-öø-ÿ -]+$/;
const DATE_REGEX = /([12]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01]))/;

const usernameValidation = (username) => {
	if (
		!USERNAME_REGEX.test(username) ||
		username.length >= 13 ||
		username.length < 1 ||
		isNil(username)
	) {
		return 'Username must be at least 1 character long & no longer than 12 characters';
	}
	return null;
};

const emailValidation = (email) => {
	if (!EMAIL_REGEX.test(email) || email.length === 0 || isNil(email)) {
		return 'Email must not contain invalid characters';
	}
	return null;
};
const passwordValidation = (password) => {
	if (!PASSWORD_REGEX.test(password) || password.length < 6 || isNil(password)) {
		return 'Password must not contain invalid characters and be 6 characters or more';
	}
	return null;
};

const birthdayValidation = (birthday) => {
	if (!DATE_REGEX.test(birthday) && birthday !== '' && !isNil(birthday)) {
		return 'Birthday must not contain invalid characters';
	}
};

const countryValidation = (country) => {
	if (!COUNTRY_REGEX.test(country) && country !== '') {
		return 'Country must not contain invalid characters';
	}
};
const genderValidation = (gender) => {
	if (
		gender !== 'Male' &&
		gender !== 'Female' &&
		gender !== 'Other' &&
		gender !== '' &&
		!isNil(gender)
	) {
		return 'Gender must not contain invalid characters';
	}
};

const newsletterValidation = (newsletter) => {
	if (typeof newsletter !== 'boolean') {
		return 'Newsletter is invalid';
	}
};
const termsValidation = (terms) => {
	if (typeof terms !== 'boolean') {
		return 'Terms is invalid';
	}
};

module.exports = (data) => {
	const { username, email, password, birthday, country, gender, newsletter, terms } = data;
	const errors = [];

	const usernameError = usernameValidation(username);
	if (usernameError) errors.push({ field: 'username', message: usernameError });

	const emailError = emailValidation(email);
	if (emailError) errors.push({ field: 'email', message: emailError });

	const passwordError = passwordValidation(password);
	if (passwordError) errors.push({ field: 'password', message: passwordError });

	const birthdayError = birthdayValidation(birthday);
	if (birthdayError) errors.push({ field: 'birthday', message: birthdayError });

	const countryError = countryValidation(country);
	if (countryError) errors.push({ field: 'country', message: countryError });

	const genderError = genderValidation(gender);
	if (genderError) errors.push({ field: 'gender', message: genderError });

	const newsletterError = newsletterValidation(newsletter);
	if (newsletterError) errors.push({ field: 'newsletter', message: newsletterError });

	const termsError = termsValidation(terms);
	if (termsError) errors.push({ field: 'terms', message: termsError });

	return errors.length > 0 ? errors : null;
};
