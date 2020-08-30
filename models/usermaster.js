'use strict';
const {
	Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
	class UserMaster extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			// define association here
		}
	};

	UserMaster.init({
		iUserId: {
			type: DataTypes.INTEGER,
			primaryKey: true,
		},
		vName: {
			type: DataTypes.STRING
		},
		vProfileImage: {
			type: DataTypes.STRING,
			get() {
				var profile = this.getDataValue("vProfileImage");
				return (profile) ? profile : 'default.png';
			}
		},
		txAddress: {
			type: DataTypes.TEXT
		},
		vEmail: {
			type: DataTypes.STRING,
			validate: {
				isUnique: function (val, next) {
					UserMaster.findOne({
						where: {
							vEmail: this.vEmail
						}
					}).then((_result) => {
						if (_result) {
							return next("Email is already exit")
						} else {
							next();
						}
					});
				}
			}
		},
		vPassword: {
			type: DataTypes.STRING
		},
	}, {
		sequelize,
		paranoid: true,
		modelName: 'UserMaster',
		tableName: 'user_master',
	});
	return UserMaster;
};