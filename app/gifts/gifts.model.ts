const Sequelize = require("sequelize");
import { sequelizeConnection } from "../../config/dbConnection"

export const Gifts = sequelizeConnection.define("gifts", {
    giftId: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    giftName: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    giftValue: {
        type: Sequelize.STRING,
        allowNull: false,
    },
});


