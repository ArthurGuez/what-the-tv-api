'use strict';
module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.createTable('Users', {
			id: {
				allowNull: false,
				primaryKey: true,
				type: Sequelize.UUID,
				defaultValue: Sequelize.UUIDV4,
			},
			username: {
				allowNull: false,
				type: Sequelize.STRING,
			},
			password: {
				allowNull: false,
				type: Sequelize.STRING,
			},
			email: {
				allowNull: false,
				type: Sequelize.STRING,
			},
			birthday: {
				type: Sequelize.DATEONLY,
			},
			country: {
				type: Sequelize.STRING,
			},
			gender: {
				type: Sequelize.STRING,
			},
			newsletter: {
				allowNull: false,
				type: Sequelize.BOOLEAN,
			},
			terms: {
				allowNull: false,
				type: Sequelize.BOOLEAN,
			},
			answered: {
				type: Sequelize.ARRAY(Sequelize.UUID),
			},
			createdAt: {
				allowNull: false,
				type: Sequelize.DATE,
				defaultValue: Sequelize.fn('NOW'),
			},
			updatedAt: {
				allowNull: false,
				type: Sequelize.DATE,
				defaultValue: Sequelize.fn('NOW'),
			},
		});
	},
	down: async (queryInterface, Sequelize) => {
		await queryInterface.dropTable('Users');
	},
};
