import { adminService } from "../database/services";

export const checkUserExist = async (req, res, next) => {
  const payload_1 = `${req.body.lastName}-${req.body.firstName}`;
  const userName = payload_1.toLocaleLowerCase();
  const email = req.body.email;

  const user = await adminService.findUser(userName, email);
  if (user) {
    return res.status(400).json({
      statusCode: 400,
      message: "Désolé, cet utilisateur existe déjà",
      user: user,
    });
  }
  next();
};
