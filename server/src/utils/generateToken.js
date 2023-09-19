import jwt from "jsonwebtoken";
import { KEY } from "../middlewares/restrictionMiddleware.js";

export function generateToken(username) {
  const secretKey = KEY; // Replace with a strong, secret key
  const token = jwt.sign({ username }, secretKey, { expiresIn: "1h" }); // Token expires in 1 hour
  return token;
}
