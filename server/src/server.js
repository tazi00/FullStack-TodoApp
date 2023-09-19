import http from "http";
import express from "express";
import authRouter from "./routes/auth.routes.js";
import { authenticateToken } from "./middlewares/restrictionMiddleware.js";
import userRouter from "./routes/user.routes.js";

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.json({ msg: "hello todo app" });
});

app.use("/", authRouter);
app.use("/user", authenticateToken, userRouter);

const server = http.createServer(app);
server.listen(3000, () =>
  console.log("Server started on http://localhost:3000")
);
