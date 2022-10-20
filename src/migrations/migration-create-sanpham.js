'use strict';
module.exports = {
	// maSP: DataTypes.STRING,
	// 		tenSP: DataTypes.STRING,
	// 		gia: DataTypes.INTEGER,
	// 		kichCo: DataTypes.STRING,
	// 		moTa: DataTypes.BOOLEAN,
	// 		danhMuc: DataTypes.STRING
	up: async (queryInterface, Sequelize) => {
		await queryInterface.createTable('Sanpham', {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER
			},
			maSP: {
				type: Sequelize.STRING
			},
			tenSP: {
				type: Sequelize.STRING
			},
			gia: {
				type: Sequelize.INTEGER
			},
			kichCo: {
				type: Sequelize.STRING
			},
			moTa: {
				type: Sequelize.STRING
			},
			danhMuc: {
				type: Sequelize.STRING
			},
			createdAt: {
				allowNull: false,
				type: Sequelize.DATE
			},
			updatedAt: {
				allowNull: false,
				type: Sequelize.DATE
			}
		});
	},
	down: async (queryInterface, Sequelize) => {
		await queryInterface.dropTable('Sanpham');
	}
};
