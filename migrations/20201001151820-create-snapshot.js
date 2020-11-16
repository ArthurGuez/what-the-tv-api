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
			path: {
				allowNull: false,
				type: Sequelize.STRING,
			},
			showId: {
				allowNull: false,
				type: Sequelize.UUID,
				references: {
					model: 'Shows',
					key: 'id',
				},
			},
			seasonId: {
				allowNull: false,
				type: Sequelize.UUID,
				references: {
					model: 'Seasons',
					key: 'id',
				},
			},
			episodeId: {
				allowNull: false,
				type: Sequelize.UUID,
				references: {
					model: 'Episodes',
					key: 'id',
				},
			},
			postedBy: {
				allowNull: false,
				type: Sequelize.UUID,
				references: {
					model: 'Users',
					key: 'id',
				},
				onDelete: 'CASCADE',
			},
			firstSolvedBy: {
				type: Sequelize.UUID,
				references: {
					model: 'Users',
					key: 'id',
				},
				onDelete: 'SET NULL',
			},
			solved: {
				allowNull: false,
				defaultValue: 0,
				type: Sequelize.INTEGER,
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
