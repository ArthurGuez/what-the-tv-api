'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
	class Snapshot extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			this.belongsTo(models.Show, {
				foreignKey: {
					name: 'showId',
				},
			});
			this.belongsTo(models.Season, {
				foreignKey: {
					name: 'seasonId',
				},
			});
			this.belongsTo(models.Episode, {
				foreignKey: {
					name: 'episodeId',
				},
			});
			this.belongsTo(models.User, {
				foreignKey: {
					name: 'postedBy',
				},
			});
			this.belongsTo(models.User, {
				foreignKey: {
					name: 'firstSolvedBy',
				},
			});
		}
	}
	Snapshot.init(
		{
			path: DataTypes.STRING,
			showId: DataTypes.UUID,
			seasonId: DataTypes.UUID,
			episodeId: DataTypes.UUID,
			postedBy: DataTypes.UUID,
			firstSolvedBy: DataTypes.UUID,
		},
		{
			sequelize,
			modelName: 'Snapshot',
		}
	);
	return Snapshot;
};
