'use strict';
module.exports = {
	// maDH: DataTypes.STRING,
	// ngay: DataTypes.DATE,
	// trangThai: DataTypes.STRING,
	// tong: DataTypes.STRING,
	// maKH: DataTypes.STRING
	up: async (queryInterface, Sequelize) => {
		await queryInterface.createTable('Donhang', {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER
			},
			maDH: {
				type: Sequelize.STRING
			},
			ngay: {
				type: Sequelize.DATE
			},
			trangThai: {
				type: Sequelize.STRING
			},
			tong: {
				type: Sequelize.INTEGER
			},
			maKH: {
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
		await queryInterface.dropTable('Donhang');
	}
};
