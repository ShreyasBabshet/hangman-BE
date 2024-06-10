const Sequelize = require("sequelize");
import { sequelizeConnection } from "../../config/dbConnection";

export const Players = sequelizeConnection.define("players", {
    playerId: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    playerName: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    gamesPlayed: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    totalCoins: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    thirdPriceCoins: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    tournamentStatus: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    isDeleted: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
    }
})