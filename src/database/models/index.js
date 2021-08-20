import { User } from "./user/User.js";
import { Role } from "./user/Role.js";
import { UserRole } from "./user/UserRole.js";

export const createAssociations = () => {
  User.belongsToMany(Role, { through: UserRole });
  Role.belongsToMany(User, { through: UserRole });
};
