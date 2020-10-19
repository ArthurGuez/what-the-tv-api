const Sequelize = require('sequelize');
const { Op } = require('sequelize');

const db = require('../models');

const { Snapshot, Show, User } = db;

module.exports = {
	findSnap: (snapId) => {
		return Snapshot.findByPk(snapId, {
			attributes: ['path', 'solved'],
			include: [
				{
					model: User,
					as: 'poster',
					attributes: ['username'],
				},
				{
					model: User,
					as: 'solver',
					attributes: ['username'],
				},
			],
			raw: true,
		});
	},

	findUnanswered: (answered) => {
		return Snapshot.findOne({
			where: { id: { [Op.notIn]: answered } },
			order: [[Sequelize.fn('RANDOM')]],
			attributes: ['id'],
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

	// Retourne les 4 snapshots les plus récents
	findRecentSnaps: () => {
		return Snapshot.findAll({
			order: [['createdAt', 'DESC']],
			attributes: ['path', 'id'],
			limit: 4,
		});
	},

	// Retourne les snapshots vieux d'au moins 30 jours pour une série donnée
	findShowSnaps: (showId) => {
		const thirtyDaysAgo = new Date(new Date().setDate(new Date().getDate() - 30));

		return Snapshot.findAll({
			where: { showId, createdAt: { [Op.lt]: thirtyDaysAgo } },
			attributes: ['path'],
		});
	},

	// Incrémente de 1 la colonne 'solved'
	incrementCounter: async (snapId) => {
		const snapFound = await Snapshot.findByPk(snapId);

		return snapFound.increment(['solved'], { by: 1 });
	},
};
