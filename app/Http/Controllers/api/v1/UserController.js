/**
 * @class User Controller
 * @author Bhargav Tailor
 * @description This class contain user related information 
 */

const constant = require("../../../../../config/constants");

class UserController {

    /**
     * @param {object} req incoming request object
     * @param {*} res outgoing response object
     * 
     * @description ThiS function is used to register new user
     */
    signUp(req, res) {
        res.json({
            code: constant.resCode.OK,
            message: "This is a test message"
        })
    }
}

module.exports = new UserController();