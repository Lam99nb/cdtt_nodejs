'use strict';
module.exports = {
	// maCTDH: DataTypes.STRING,
	// maSP: DataTypes.STRING,
	// gia: DataTypes.INTEGER,
	// soLuong: DataTypes.STRING,
	// tong: DataTypes.INTEGER,
	// maDH: DataTypes.STRING,
	up: async (queryInterface, Sequelize) => {
		await queryInterface.createTable('ChitietDH', {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER
			},
			maCTDH: {
				type: Sequelize.STRING
			},
			maSP: {
				type: Sequelize.STRING
			},
			gia: {
				type: Sequelize.INTEGER
			},
			soLuong: {
				type: Sequelize.STRING
			},
			tong: {
				type: Sequelize.INTEGER
			},
			maDH: {
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
		await queryInterface.dropTable('ChitietDH');
	}
};
