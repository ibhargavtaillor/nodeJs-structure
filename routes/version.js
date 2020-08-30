/**
 * @description This file contiain the application route version
 * 
 * @author Bhargav Tailor
 */
const router = require("express").Router();
class Version {

    /**
     * @description this function contain all version one routing
     */
    v1() {
        const UserController = require("../app/Http/Controllers/api/v1/UserController");
        router.get("/signup", UserController.signUp);
        return router;
    }
}

module.exports = new Version();