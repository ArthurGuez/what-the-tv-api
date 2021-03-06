'use strict';

const bcrypt = require('bcrypt');
const password = 'Azerty94';
const hashedPwd = bcrypt.hashSync(password, 10);

module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.bulkInsert(
			'Users',
			[
				{
					id: '93c2edcc-341b-42f0-92a2-e10e1e239bcd',
					username: 'Yama',
					password: hashedPwd,
					email: 'y@y.fr',
					newsletter: false,
					terms: true,
				},
				{
					id: '07edab7c-8980-4032-b04f-94b6da7d7787',
					username: 'GordonCole',
					password: hashedPwd,
					email: 'g@g.fr',
					newsletter: false,
					terms: true,
				},
				{
					id: '07edab7c-8980-4032-b04f-94b6da7d7788',
					username: 'Arthur',
					password: hashedPwd,
					email: 'a@a.fr',
					newsletter: false,
					terms: true,
				},
			],
			{}
		);
	},

	down: async (queryInterface, Sequelize) => {
		await queryInterface.bulkDelete('Users', null, {});
	},
};
