import jwt from "jsonwebtoken";

export const KEY = "TODOAPP";
export const invalidatedTokens = new Set();

export function authenticateToken(req, res, next) {
  const token = req.header("Authorization");

  if (!token)
    return res
      .status(401)
      .json({ error: "Access denied. Token not provided." });
  if (invalidatedTokens.has(token))
    return res.status(403).json({ error: "Invalid token." });
  jwt.verify(token, KEY, (err, decoded) => {
    if (err) return res.status(403).json({ error: "Invalid token." });
    req.user = decoded;
    next();
  });
}
