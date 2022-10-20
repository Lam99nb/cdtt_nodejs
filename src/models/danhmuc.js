'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
	class Danhmuc extends Model {
		/**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
		static associate(models) {
			// define association here
		}
	}
	Danhmuc.init(
		{
			maDM: DataTypes.STRING,
			tenDM: DataTypes.STRING,
			maSP: DataTypes.INTEGER,
			tenSP: DataTypes.STRING
		},
		{
			sequelize,
			modelName: 'Danhmuc'
		}
	);
	return Danhmuc;
};
