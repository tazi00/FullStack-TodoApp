import express from "express";
import { getTodos } from "../controllers/todos.controller.js";

const todosRouter = express.Router();
todosRouter.route("/").get(getTodos);
// userRouter.route().post()
export default todosRouter;
