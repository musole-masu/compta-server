import { request, response } from "express";
import { adminService } from "../database/services/index";
import { passwordUtil } from "../utils/index";
import { tokenUtil } from "../utils/index";

import "dotenv/config";
import * as jwt from "jsonwebtoken";

export const createAdminHandler = async (req = request, res = response) => {
  const userData = req.body;

  const userId = (
    Date.now().toString(36) + Math.random().toString(36).substr(2, 5)
  ).toUpperCase();
  const hashedPassword = passwordUtil.hashPassword(req.body.password);
  const userName = `${req.body.lastName}-${req.body.firstName}`;

  const newUser = await adminService.createUser({
    ...userData,
    userName: userName.toLocaleLowerCase(),
    password: hashedPassword,
    id: userId,
  });

  const foundRole = await adminService.findRole(userData.role);
  if (!foundRole) {
    return res.status(404).json({
      statusCode: 404,
      message: `Ce role de'utilisateur ${userData.role} pas trouve`,
      data: foundRole,
    });
  }

  const useRole = await adminService.addRoleToUser(newUser, foundRole);

  const token = tokenUtil.generate(newUser.id);

  return res.status(200).json({
    statusCode: 200,
    message: "Utilisateur créé avec succès",
    data: { token: token, newUser, role: useRole },
  });
};
export const loginHandler = async (req = request, res = response) => {
  const userData = req.body;

  const foundUser = await adminService.findUserName(userData.userName);
  if (!foundUser) {
    return res.status(404).json({
      statusCode: 404,
      message: `Nom de l'utilisateur ${userData} pas trouve`,
      data: foundUser,
    });
  }
  const isPasswordCorrect = passwordUtil.comparePassword(
    userData.password,
    foundUser.password
  );
  if (!isPasswordCorrect) {
    return res.status(401).json({
      statusCode: 401,
      message: `Mot de passe incorrect, veillez entrer votre mot de pass`,
    });
  }

  const token = jwt.sign(
    { userId: foundUser.id },
    process.env.ACCESS_TOKEN_SECRET,
    {
      expiresIn: "1d",
    }
  );
  return res.status(200).json({
    statusCode: 200,
    message: `Connection reussie`,
    data: {
      user: foundUser,
      token: token,
    },
  });
};
export const createRoleHandler = async (req = request, res = response) => {
  const role = req.body;
  const newRole = await adminService.createRole(role);
  return res.status(200).json({
    message: "Role created with success",
    data: newRole,
  });
};
exports.addRoleHandler = async (req = request, res = response) => {};
