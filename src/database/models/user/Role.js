import { Sequelize } from "sequelize";
import sequelize from "../../../config/dbConnection.js";

export const Role = sequelize.define(
  "Role",
  {
    roleTitle: { type: Sequelize.STRING, allowNull: false },
    roleDescription: { type: Sequelize.STRING, allowNull: false },
  },
  {
    tableName: "roles",
  }
);
