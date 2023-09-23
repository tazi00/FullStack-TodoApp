import http from "http";
import express from "express";
import cors from "cors"; // Import the cors middleware
import authRouter from "./routes/auth.routes.js";
import { authenticateToken } from "./middlewares/auth/restrictionMiddleware.js";
import userRouter from "./routes/user.routes.js";
import todosRouter from "./routes/todos.routes.js";

const app = express();

app.use(express.json());

app.use(cors());

app.get("/", (req, res) => {
  res.json({ msg: "hello todo app" });
});

app.use("/", authRouter);
app.use("/user", authenticateToken, userRouter);
app.use("/todos", authenticateToken, todosRouter);

const server = http.createServer(app);
server.listen(3000, () =>
  console.log("Server started on http://localhost:3000")
);
