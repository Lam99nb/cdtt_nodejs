'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
	class AllCodes extends Model {
		/**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
		static associate(models) {
			AllCodes.hasMany(models.Product, { foreignKey: 'category', as: 'categoryData' });
			AllCodes.hasMany(models.Product, { foreignKey: 'size', as: 'sizeData' });
		}
	}
	AllCodes.init(
		{
			type: DataTypes.STRING,
			keyMap: DataTypes.STRING,
			value: DataTypes.STRING
		},
		{
			sequelize,
			modelName: 'AllCodes'
		}
	);
	return AllCodes;
};
