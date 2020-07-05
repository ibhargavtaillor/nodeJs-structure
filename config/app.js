/**
 * @description This file contain the app level config
 * 
 * @author Bhargav Tailor
 */

module.exports = {

    /**
     * Set application name
     */
    appName: (process.env.APPNAME != undefined) ? process.env.APPNAME : "Basecode",

    /**
     * Set App version
     */
    version: "1.0.0",

}