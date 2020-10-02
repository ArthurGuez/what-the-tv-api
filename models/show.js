'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
	class Show extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			this.hasMany(models.Season, {
				foreignKey: {
					name: 'showId',
				},
			});

			this.hasMany(models.Snapshot, {
				foreignKey: {
					name: 'showId',
				},
			});
		}
	}
	Show.init(
		{
			title: DataTypes.STRING,
		},
		{
			sequelize,
			modelName: 'Show',
		}
	);
	return Show;
};
