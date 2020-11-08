const { isNil } = require('lodash');

const GUESS_REGEX = /^[A-Za-zÀ-ÖØ-öø-ÿ0-9 &'-]+$/;

module.exports = (guess) => {
	if (!GUESS_REGEX.test(guess) || guess.length === 0 || isNil(guess)) {
		throw new BadRequestError('Bad Request', 'Answer must not contain invalid characters');
	}
};
