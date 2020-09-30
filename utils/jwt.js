const jwt = require('jsonwebtoken');

const UnauthorizedError = require('../');
const ForbiddenError = require('../../airbnb-clone-api/helpers/errors/forbidden_error');

const secret = process.env.JWT_SIGN_SECRET;

module.exports = {
	genToken: (userData) => {
		return jwt.sign(
			{
				userId: userData.id,
			},
			secret,
			{
				expiresIn: '7d',
			}
		);
	},

	verifyToken: (req, res, next) => {
		const authHeader = req.headers.authorization;

		if (authHeader && authHeader.split(' ')[0] === 'Bearer') {
			const token = authHeader.split(' ')[1];
			jwt.verify(token, secret, (err, user) => {
				if (err) {
					throw new ForbiddenError();
				}
				req.user = user;
				next();
			});
		} else {
			throw new UnauthorizedError('Acces Denied', 'This request requires user authentication');
		}
	},
};
