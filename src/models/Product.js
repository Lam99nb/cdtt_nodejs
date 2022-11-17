'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
	class Product extends Model {
		/**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
		//Mối quan hệ
		static associate(models) {
			Product.belongsTo(models.AllCodes, { foreignKey: 'category', targetKey: 'keyMap', as: 'categoryData' });
			Product.belongsTo(models.AllCodes, { foreignKey: 'size', targetKey: 'keyMap', as: 'sizeData' });
		}
	}
	Product.init(
		{
			productId: DataTypes.STRING,
			productName: DataTypes.STRING,
			price: DataTypes.INTEGER,
			size: DataTypes.STRING,
			describe: DataTypes.STRING,
			category: DataTypes.STRING,
			image: DataTypes.BLOB('long')
		},
		{
			sequelize,
			modelName: 'Product',
			freezeTableName: true
		}
	);
	return Product;
};
