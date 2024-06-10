const Sequelize = require("sequelize");
export const sequelizeConnection = new Sequelize("hangman", "root", "admin", {
    dialect: "mysql",
    host: "localhost",
});

// module.exports = sequelizeConnection;