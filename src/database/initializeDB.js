import sequelize from "../config/dbConnection.js";
import { createAssociations } from "./models/index.js";

export const initializeDB = async () => {
  createAssociations();
  try {
    const response = await sequelize.sync({ alter: true });
    console.log(
      `LA COMPTA SERVER SUCCESSFULLY CONNECTED TO ${response.config.database} DATABASE ON ${response.config.host}`
    );
  } catch (error) {
    console.log(error);
  }
};
