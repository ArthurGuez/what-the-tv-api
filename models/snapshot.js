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
			title: DataTypes.STRING,
			path: DataTypes.STRING,
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
