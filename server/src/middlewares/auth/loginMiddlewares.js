import { body } from "express-validator";
import { validationResult } from "express-validator";
// Validation rules for the login route
export const authLoginValidationRules = () => [
  body("identifier")
    .trim()
    .notEmpty()
    .withMessage("Email or username is required"),
  body("password").trim().notEmpty().withMessage("Password is required"),
];

export const checkValidationResult = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  next();
};
