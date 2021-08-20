import { Sequelize } from "sequelize";
import sequelize from "../../../config/dbConnection.js";

export const UserRole = sequelize.define(
  "UserRole",
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
  },
  {
    tableName: "user-role",
  }
);
