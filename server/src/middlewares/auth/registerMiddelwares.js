import { body } from "express-validator";
import { validationResult } from "express-validator";
import { checkUserExists } from "../../model/auth.model.js";

export const authRegisterValidationRules = () => [
  body("username")
    .trim()
    .isLength({ min: 4, max: 12 })
    .withMessage("Username must be 4-12 characters long"),
  body("password")
    .trim()
    .isLength({ min: 4, max: 12 })
    .withMessage("Password must be 4-12 characters long"),
  body("email").isEmail().withMessage("Email is not valid"),
];

export const checkValidationResult = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  next();
};

export const checkUserExistence = async (req, res, next) => {
  try {
    const { username, email } = req.body;
    const userExists = await checkUserExists(username, email);
    if (userExists) {
      return res
        .status(409)
        .json({ error: "Username or email is already registered." });
    }
    next();
  } catch (err) {
    console.error("Error checking user existence:", err);
    res
      .status(500)
      .json({ error: "An error occurred while checking user existence." });
  }
};
