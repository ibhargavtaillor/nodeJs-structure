/**
 * @class User Controller
 * @author Bhargav Tailor
 * @description This class contain user related information 
 */

const constant = require("../../../../../config/constants");
const models = require("../../../../../models/index");
class UserController {

    /**
     * @param {object} req incoming request object
     * @param {*} res outgoing response object
     * 
     * @description ThiS function is used to register new user
     */
    signUp(req, res) {
        var users = models.sequelize.models.UserMaster.findAll({
            attributes: ['vName']
        }).then((_result) => {
            _result.forEach((user, index) => {
                console.log(user.isNewRecord);
            })
        });
    }
}

module.exports = new UserController();