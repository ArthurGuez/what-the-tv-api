const db = require('../models');
const { v4: uuidv4 } = require('uuid');

const { Episode } = db;

module.exports = {
	addEpisode: (seasonId, number, title) => {
		return Episode.findOrCreate({
			where: { seasonId, number },
			defaults: {
				id: uuidv4(),
				title: title.toLowerCase(),
			},
		});
	},
};
