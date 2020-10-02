const Sequelize = require('sequelize');
const { Op } = require('sequelize');

const db = require('../models');

const { Snapshot, Show } = db;

module.exports = {
	findUnanswered: (answered) => {
		return Snapshot.findOne({
			where: { id: { [Op.notIn]: answered } },
			order: [[Sequelize.fn('RANDOM')]],
		});
	},

	verifyGuess: async (snapId, guess) => {
		const showTitle = (
			await Snapshot.findByPk(snapId, {
				attributes: [],
				include: {
					model: Show,
					attributes: ['title'],
				},
			})
		).Show.title;

		let guessLow = guess.toLowerCase();

		if (guessLow === showTitle) {
			return showTitle;
		} else {
			return false;
		}
	},

	// findShow: (search) => {
	// 	const results = `https://api.themoviedb.org/3/search/tv?api_key=efbd136e89c83ddcf195e48a61327f4a&language=en-US&page=1&query=${search}&include_adult=false`;
	// },
};
