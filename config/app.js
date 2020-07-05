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

    /**
     * Set flag for api log 
     * 
     * if this key set to true the it will save all incoming request detail request log table
     */
    requestLog: true

}