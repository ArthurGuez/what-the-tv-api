'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
	class Shout extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			this.belongsTo(models.User, {
				foreignKey: {
					name: 'userId',
				},
			});

			this.belongsTo(models.Snapshot, {
				foreignKey: {
					name: 'snapshotId',
				},
			});
		}
	}
	Shout.init(
		{
			userId: DataTypes.UUID,
			snapshotId: DataTypes.UUID,
			content: DataTypes.STRING,
		},
		{
			sequelize,
			modelName: 'Shout',
		}
	);
	return Shout;
};
