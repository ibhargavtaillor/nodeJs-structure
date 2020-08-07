/**
 * @description This file contiain the application route version
 * 
 * @author Bhargav Tailor
 */
class Version {

    /**
     * @param object app incoming express app object
     * 
     * @description this function contain all version one routing
     */
    v1(_router) {
        const UserController = require("../app/Http/Controllers/api/v1/UserController");
        _router.get("/signup", UserController.signUp);
        return _router;
    }
}

module.exports = new Version();