import { registerUser } from "../model/auth.model.js";
import { v4 as uuid4 } from "uuid";
import { usersPath } from "../utils/filepaths.js";
import { validationResult } from "express-validator";
import { getAllUsers } from "../model/auth.model.js";
import { generateToken } from "../utils/generateToken.js";
export async function authLogin(req, res) {
  try {
    const { identifier, password } = req.body;
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const userData = await getAllUsers();
    const user = userData.users.find(
      (user) => user.email === identifier || user.userName === identifier
    );

    if (user && user.password === password) {
      const token = generateToken(user.userName);
      res.json({ msg: "Authentication successful", token });
    } else {
      res.status(401).json({ error: "Authentication failed" });
    }
  } catch (err) {
    console.error("Error during login:", err);
    res.status(500).json({ error: "An error occurred during login" });
  }
}

export async function authRegister(req, res) {
  try {
    const { username, password, email } = req.body;
    const newUser = {
      id: uuid4(),
      userName: username,
      email: email,
      password: password,
      filePath: usersPath, // You can set this value as needed
    };

    const result = await registerUser(newUser);
    if (result === "User has been appended.") {
      res.json({ msg: "User registered successfully" });
    } else {
      res
        .status(500)
        .json({ error: "An error occurred while registering the user." });
    }
  } catch (err) {
    console.error("Error registering user:", err);
    res
      .status(500)
      .json({ error: "An error occurred while registering the user." });
  }
}

export async function authlogout(req, res) {
  res.json({ msg: "auth logout" });
}
