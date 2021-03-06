'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
	class User extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			this.hasMany(models.Snapshot, {
				foreignKey: {
					name: 'postedBy',
					onDelete: 'cascade',
				},
				foreignKey: {
					name: 'firstSolvedBy',
					onDelete: 'cascade',
				},
			});

			this.hasMany(models.Show, {
				foreignKey: {
					name: 'addedBy',
				},
			});

			this.hasMany(models.Shout, {
				foreignKey: {
					name: 'userId',
				},
			});
		}
	}
	User.init(
		{
			username: DataTypes.STRING,
			password: DataTypes.STRING,
			email: DataTypes.STRING,
			birthday: DataTypes.DATEONLY,
			country: DataTypes.STRING,
			gender: DataTypes.STRING,
			newsletter: DataTypes.BOOLEAN,
			terms: DataTypes.BOOLEAN,
			answered: DataTypes.ARRAY(DataTypes.UUID),
		},
		{
			sequelize,
			modelName: 'User',
		}
	);
	return User;
};
