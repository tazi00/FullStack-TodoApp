import express from "express";
import {
  authLogin,
  authRegister,
  authlogout,
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
authRouter.route("/logout").post(authlogout);
export default authRouter;
