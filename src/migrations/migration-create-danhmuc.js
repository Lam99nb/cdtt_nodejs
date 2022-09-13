'use strict';
module.exports = {
	// maDM: DataTypes.STRING,
	// tenDM: DataTypes.STRING,
	// maSP: DataTypes.INTEGER,
	// tenSP: DataTypes.STRING
	up: async (queryInterface, Sequelize) => {
		await queryInterface.createTable('Danhmuc', {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER
			},
			maDM: {
				type: Sequelize.STRING
			},
			tenDM: {
				type: Sequelize.STRING
			},
			maSP: {
				type: Sequelize.STRING
			},
			tenSP: {
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
		await queryInterface.dropTable('Danhmuc');
	}
};
