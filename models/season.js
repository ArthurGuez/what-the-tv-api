'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
	class Season extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			this.hasMany(models.Episode, {
				foreignKey: {
					name: 'seasonId',
				},
			});

			this.hasMany(models.Snapshot, {
				foreignKey: {
					name: 'seasonId',
				},
			});

			this.belongsTo(models.Show, {
				foreignKey: {
					name: 'showId',
				},
			});
		}
	}
	Season.init(
		{
			showId: DataTypes.UUID,
			number: DataTypes.INTEGER,
		},
		{
			sequelize,
			modelName: 'Season',
		}
	);
	return Season;
};
