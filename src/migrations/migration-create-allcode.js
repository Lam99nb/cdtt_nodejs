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
		await queryInterface.createTable('AllCodes', {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER
			},
			type: {
				type: Sequelize.STRING
			},
			keyMap: {
				type: Sequelize.STRING
			},
			value: {
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
		await queryInterface.dropTable('AllCodes');
	}
};
