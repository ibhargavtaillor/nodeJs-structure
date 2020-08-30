var Sequelize = require("sequelize");

/**
 * Code to set database credential from env
 */
var sequelize = new Sequelize(process.env.DBNAME, process.env.DBUSERNAME, process.env.DBPASS, {
    host: process.env.DBHOST,
    dialect: 'mysql',
    logging: false
});

/**
 * Test the database connection
 */
sequelize.authenticate().then(() => {
    console.log("Database Connected..")
}).catch((_error) => {
    console.log("Error : " + _error);
})


module.exports = sequelize;