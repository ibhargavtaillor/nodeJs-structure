'use strict';
module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.createTable('user_master', {
			iUserId: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER
			},
			vName: {
				allowNull: true,
				type: Sequelize.STRING(128)
			},
			vProfileImage: {
				allowNull: true,
				type: Sequelize.STRING(128)
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
			},
			deletedAt: {
				allowNull: false,
				type: Sequelize.DATE
			}
		});
	},
	down: async (queryInterface, Sequelize) => {
		await queryInterface.dropTable('user_master');
	}
};