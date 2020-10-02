const db = require('../models');
const { v4: uuidv4 } = require('uuid');

const { Show } = db;

module.exports = {
	addShow: (title, tmdbId, userId) => {
		return Show.create({
			id: uuidv4(),
			title: title.toLowerCase(),
			tmdbId,
			userId,
		});
	},

	findShow: (title) => {
		return Show.findOne({
			where: { title: title },
		});
	},
};
