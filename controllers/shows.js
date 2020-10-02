const db = require('../models');

const { Show } = db;

module.exports = {
	addShow: (title) => {
		return Show.create({
			title: title,
		});
	},
};
