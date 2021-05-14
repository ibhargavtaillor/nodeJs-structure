/**
 * @class User Controller
 * @author Bhargav Tailor
 * @description This class contain user related information 
 */

const constant = require("../../../../../config/constants");
const usermaster = require("../../../../../models/usermaster");
class UserController {

    /**
     * @param {object} req incoming request object
     * @param {*} res outgoing response object
     * 
     * @description ThiS function is used to register new user
     */
    signUp(req, res) {
        console.log(usermaster.findAll());
    }
}

module.exports = new UserController();