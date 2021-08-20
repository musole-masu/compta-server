import { adminService } from "../database/services";
import { BAD_REQUEST } from "../constants/statusCode";

export const checkRoleTitle = async (req, res, next) => {
  const roleTitle = req.body.roleTitle;
  const roleFound = await adminService.findRole(roleTitle);
  if (roleFound) {
    return res.status(BAD_REQUEST).json({
      statusCode: 400,
      message: "Désolé, ce rôle d'utilisateur existe déjà",
      user: roleFound,
    });
  } else {
    next();
  }
};
