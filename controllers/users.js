const Sequelize = require('sequelize');
const bcrypt = require('bcrypt');
const { v4: uuidv4 } = require('uuid');

const db = require('../models');

const { User } = db;

module.exports = {
	addUser: async (data) => {
		const hashedPassword = await bcrypt.hash(data.password, 10);

		return User.create({
			username: data.username,
			email: data.email,
			password: hashedPassword,
			name: data.name,
			birthday: data.birthday,
			country: data.country,
			gender: data.gender,
			newsletter: data.newsletter,
		});
	},

	deleteUser: (userId) => {
		return User.destroy({
			where: { id: userId },
		});
	},

	addAnswer: (userId, snapId) => {
		return User.update(
			{ answered: Sequelize.fn('array_append', Sequelize.col('answered'), snapId) },
			{ where: { id: userId } }
		);
	},

	findUserByUsername: (username) => {
		return User.findOne({
			where: { username: username },
		});
	},

	findAnswered: (userId) => {
		return User.findByPk(userId, {
			attributes: ['answered'],
		});
	},

	checkUsername: (username) => {
		return User.findOne({
			attributes: ['username'],
			where: {
				username: username,
			},
		});
	},

	checkPassword: (input, passwordStored) => {
		return bcrypt.compare(input, passwordStored);
	},
};
