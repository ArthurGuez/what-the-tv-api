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

		const spaces = /\s/g;
		const guessRevised = guess.toLowerCase().replace(spaces, '');

		if (guessRevised === showTitle) {
			return true;
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
	updateSnap: async (userId, snapId) => {
		const snapFound = await Snapshot.findByPk(snapId);
		if (snapFound.firstSolvedBy === null) {
			snapFound.update({
				firstSolvedBy: userId,
			});
		}
		return snapFound.increment(['solved'], { by: 1 });
	},
};
