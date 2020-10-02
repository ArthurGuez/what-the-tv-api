'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
	class Episode extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			this.hasMany(models.Snapshot, {
				foreignKey: {
					name: 'episodeId',
				},
			});

			this.belongsTo(models.Show, {
				foreignKey: {
					name: 'seasonId',
				},
			});
		}
	}
	Episode.init(
		{
			seasonId: DataTypes.UUID,
			title: DataTypes.STRING,
			number: DataTypes.INTEGER,
		},
		{
			sequelize,
			modelName: 'Episode',
		}
	);
	return Episode;
};
