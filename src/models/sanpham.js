'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
	class Sanpham extends Model {
		/**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
		static associate(models) {
			// define association here
		}
	}
	Sanpham.init(
		{
			maSP: DataTypes.STRING,
			tenSP: DataTypes.STRING,
			gia: DataTypes.INTEGER,
			kichCo: DataTypes.STRING,
			moTa: DataTypes.STRING,
			danhMuc: DataTypes.STRING
		},
		{
			sequelize,
			modelName: 'Sanpham'
		}
	);
	return Sanpham;
};
