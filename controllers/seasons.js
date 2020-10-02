const db = require('../models');
const { v4: uuidv4 } = require('uuid');

const { Season } = db;

module.exports = {
	addSeason: (showId, number) => {
		return Season.findOrCreate({
			where: { showId, number },
			defaults: {
				id: uuidv4(),
			},
		});
	},
};
