import { User } from "../models/user/User";
import { Role } from "../models/user/Role";

export class AdminService {
  createUser = async (userData) => {
    return await User.create(userData);
  };
  findUser = async (userName, email) => {
    return await User.findOne({ where: { userName: userName, email: email } });
  };
  findUserById = async (userId) => {
    return await User.findByPk(userId);
  };
  findUserName = async (userName) => {
    return await User.findOne({ where: { userName: userName } });
  };
  createRole = async (role) => {
    return await Role.create(role);
  };
  findRole = async (role) => {
    return await Role.findOne({ where: { roleTitle: role } });
  };
  addRoleToUser = async (user, role) => {
    return await user.addRole(role);
  };
}
