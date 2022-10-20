'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
	class ChitietDH extends Model {
		/**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
		static associate(models) {
			// define association here
		}
	}
	ChitietDH.init(
		{
			maCTDH: DataTypes.STRING,
			maSP: DataTypes.STRING,
			gia: DataTypes.INTEGER,
			soLuong: DataTypes.STRING,
			tong: DataTypes.INTEGER,
			maDH: DataTypes.STRING
		},
		{
			sequelize,
			modelName: 'ChitietDH'
		}
	);
	return ChitietDH;
};
