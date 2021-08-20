import { Router } from "express";
import {
  createAdminHandler,
  createRoleHandler,
  loginHandler,
  addRoleHandler,
} from "../handlers/adminHandler";
import { checkRoleTitle } from "../middlewares/checkRoleTitle";
import { checkUserExist } from "../middlewares/checkUserExist";
import { asyncHandler } from "../middlewares/asyncHandler";
import { checkAdminAuth } from "../middlewares/checkAdminAuth";

const path = "/admin";
const adminRoute = Router();

adminRoute.post(
  `${path}/sign_up`,
  checkUserExist,
  asyncHandler(createAdminHandler)
);
adminRoute.post(`${path}/login`, asyncHandler(loginHandler));
adminRoute.post(
  `${path}/add_role`,
  checkAdminAuth,
  asyncHandler(addRoleHandler)
);
adminRoute.post(
  `${path}/role`,
  checkRoleTitle,
  asyncHandler(createRoleHandler)
);

export default adminRoute;
