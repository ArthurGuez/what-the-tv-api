const bcrypt = require('bcrypt');
const { v4: uuidv4 } = require('uuid');

const db = require('../models');
const users = require('../validators/users');

const { User } = db;

module.exports = {
	addUser: async (data) => {
		const hashedPassword = await bcrypt.hash(data.password, 10);

		return User.create({
			id: uuidv4(),
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

	findUserByUsername: (username) => {
		return User.findOne({
			where: { username: username },
		});
	},

	findAnswered: (id) => {
		return User.findByPk(id, {
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
