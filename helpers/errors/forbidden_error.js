const { FORBIDDEN } = require('../status_codes');

module.exports = class ForbiddenError extends Error {
	constructor(title = 'Accès Denied', description = 'You are not authorize to access this ressource', ...params) {
		super(...params);

		if (Error.captureStackTrace) {
			Error.captureStackTrace(this, ForbiddenError);
		}

		this.name = `ForbiddenError: ${title}`;
		this.status = FORBIDDEN;
		this.title = title;
		this.description = description;
	}
};
