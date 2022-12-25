import { DataTypes } from "sequelize";
import { db } from "../database/database.config";

export const Usuario = db.define('Usuario', {

    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombre: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    estado: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    },

});
