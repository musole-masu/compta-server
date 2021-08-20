import { Sequelize } from "sequelize";
import sequelize from "../../../config/dbConnection.js";

export const User = sequelize.define(
  "User",
  {
    id: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true,
      primaryKey: true,
    },
    firstName: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    lastName: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    email: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    userName: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    password: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    hireDate: {
      type: Sequelize.DATEONLY,
      allowNull: true,
    },
    birthDate: {
      type: Sequelize.DATEONLY,
      allowNull: true,
    },
  },
  {
    tableName: "users",
  }
);
