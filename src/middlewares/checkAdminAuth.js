import "dotenv/config";
import * as jwt from "jsonwebtoken";
import { adminService } from "../database/services";

const { ACCESS_TOKEN_SECRET } = process.env;

export const checkAdminAuth = async (req, res, next) => {
  const { authorization } = req.headers;
  const token = authorization.split(" ")[1];

  if (!token) {
    res.status(401).json({
      statusCode: 401,
      message: `Pas d'authorization pour cet utilisateur`,
    });
  }

  jwt.verify(token, ACCESS_TOKEN_SECRET, async (err, decoded) => {
    if (err || !decoded) {
      res.status(401).json({
        statusCode: 401,
        message: `Pas d'authorization pour cet utilisateur`,
      });
    }
    const { userId } = decoded;
    const user = await adminService.findUserById(userId);
    if (user === null) {
      res.status(401).json({
        statusCode: 401,
        message: `Pas d'authorization pour cet utilisateur`,
      });
    }
    res.status(200).json({
      user: user,
    });
    next();
  });
};
