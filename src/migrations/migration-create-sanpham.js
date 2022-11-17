'use strict';
module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.createTable('Product', {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER
			},
			productId: {
				type: Sequelize.STRING
			},
			productName: {
				type: Sequelize.STRING
			},
			price: {
				type: Sequelize.INTEGER
			},
			size: {
				type: Sequelize.STRING
			},
			describe: {
				type: Sequelize.STRING
			},
			category: {
				type: Sequelize.STRING
			},
			image: {
				type: Sequelize.BLOB('long')
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
		await queryInterface.dropTable('Product');
	}
};
