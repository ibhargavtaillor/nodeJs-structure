'use strict';
module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.createTable('users_master', {
			iUserid: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER
			},
			vName: {
				allowNull: true,
				type: Sequelize.STRING
			},
			txAddress: {
				allowNull: true,
				type: Sequelize.TEXT
			},
			vEmail: {
				allowNull: true,
				type: Sequelize.STRING
			},
			vPassword: {
				allowNull: true,
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
		await queryInterface.dropTable('user_masters');
	}
};