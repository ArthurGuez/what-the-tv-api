const { Op } = require('sequelize');

const db = require('../models');

const { Snapshot } = db;

module.exports = {
	findUnanswered: (answered) => {
		return Snapshot.findOne({
			where: { id: { [Op.notIn]: answered } },
		});
	},
};
