const jwt = require('jsonwebtoken');

const UnauthorizedError = require('../helpers/errors/unauthorized_error');
const ForbiddenError = require('../helpers/errors/forbidden_error');

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
		const bearer = authHeader.split(' ')[0];
		if (authHeader && bearer === 'Bearer') {
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
