var mysql = require("mysql");

/**
 * Code to set database credential from env
 */
var credential = {
    host: process.env.DBHOST,
    user: process.env.DBUSERNAME,
    password: process.env.DBPASS,
    database: process.env.DBNAME
}

/**
 * create connection pool
 */
module.exports = mysql.createPool(credential);