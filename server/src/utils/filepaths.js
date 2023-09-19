import path from "path";
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
export const authPath = path.join(
  path.dirname(__filename),
  "..",
  "db",
  "auth.json"
);
export const usersPath = path.join(
  path.dirname(__filename),
  "..",
  "db",
  "users.json"
);
