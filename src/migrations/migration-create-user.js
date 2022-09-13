'use strict';
module.exports = {
	// id: DataTypes.STRING,
	// firstName: DataTypes.STRING,
	// lastName: DataTypes.STRING,
	// email: DataTypes.STRING,
	// address: DataTypes.STRING,
	// gender: DataTypes.BOOLEAN,
	// roleid: DataTypes.STRING
	up: async (queryInterface, Sequelize) => {
		await queryInterface.createTable('Users', {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER
			},
			email: {
				type: Sequelize.STRING
			},
			password: {
				type: Sequelize.STRING
			},
			firstName: {
				type: Sequelize.STRING
			},
			lastName: {
				type: Sequelize.STRING
			},
			address: {
				type: Sequelize.STRING
			},
			phonenumber: {
				type: Sequelize.STRING
			},
			gender: {
				type: Sequelize.BOOLEAN
			},
			roleid: {
				type: Sequelize.STRING
			},
			img: {
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
		await queryInterface.dropTable('Users');
	}
};
