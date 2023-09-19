import express from "express";
import {
  authLogin,
  authLogout,
  authRegister,
} from "../controllers/auth.controller.js";
import {
  authRegisterValidationRules,
  checkUserExistence,
  checkValidationResult,
} from "../middlewares/auth/registerMiddelwares.js";
import { authLoginValidationRules } from "../middlewares/auth/loginMiddlewares.js";
const authRouter = express.Router();
authRouter
  .route("/login")
  .post(authLoginValidationRules(), checkValidationResult, authLogin);
authRouter
  .route("/register")
  .post(
    authRegisterValidationRules(),
    checkValidationResult,
    checkUserExistence,
    authRegister
  );
authRouter.route("/logout").post(authLogout);
export default authRouter;
