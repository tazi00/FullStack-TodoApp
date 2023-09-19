import express from "express";
import { getUser } from "../controllers/userController.js";

const userRouter = express.Router();
userRouter.route("/").get(getUser);
// userRouter.route().post()
export default userRouter;
