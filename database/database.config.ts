import { Sequelize } from "sequelize";
import { DatabaseConfig } from "../common/db.common";

let { host, user, database, password, port } = DatabaseConfig.mysql;

export const db = new Sequelize(database, user, password, {
  host,
  dialect: "mysql",
  logging: false,
});
