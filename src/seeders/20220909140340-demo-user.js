'use strict';

module.exports = {
	up: async (queryInterface, Sequelize) => {
		return queryInterface.bulkInsert('Users', [
			{
				firstName: 'Ngoc',
				lastName: 'Lam',
				email: 'sales4.nhatlongtravel@gmail.com',
				password: '123',
				address: 'NB',
				gender: 1,
				roleid: 'ROLE',
				keyrole: 'R1',
				createdAt: new Date(),
				updatedAt: new Date()
			}
		]);
	},

	down: async (queryInterface, Sequelize) => {
		/**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
	}
};
