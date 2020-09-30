'use strict';
module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.createTable('Snapshots', {
			id: {
				allowNull: false,
				primaryKey: true,
				type: Sequelize.UUID,
				defaultValue: Sequelize.UUIDV4,
			},
			title: {
				type: Sequelize.STRING,
			},
			path: {
				type: Sequelize.STRING,
			},
			postedBy: {
				type: Sequelize.UUID,
				references: {
					model: 'Users',
					key: 'id',
				},
			},
			firstSolvedBy: {
				type: Sequelize.UUID,
				references: {
					model: 'Users',
					key: 'id',
				},
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
		await queryInterface.dropTable('Snapshots');
	},
};
