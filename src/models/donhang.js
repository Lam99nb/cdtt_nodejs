'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
	class Donhang extends Model {
		/**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
		static associate(models) {
			// define association here
		}
	}
	Donhang.init(
		{
			maDH: DataTypes.STRING,
			ngay: DataTypes.DATE,
			trangThai: DataTypes.STRING,
			tong: DataTypes.INTEGER,
			maKH: DataTypes.STRING
		},
		{
			sequelize,
			modelName: 'Donhang'
		}
	);
	return Donhang;
};
