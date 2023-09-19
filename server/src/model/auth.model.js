import fsPromise from "fs/promises";
import { authPath } from "../utils/filepaths.js";

export async function getAllUsers() {
  try {
    const getData = await fsPromise.readFile(authPath);
    const parsedData = JSON.parse(getData);
    console.log(parsedData);
    return parsedData;
  } catch (err) {
    console.error("Error reading users data:", err);
    throw err;
  }
}
export async function registerUser(newUser) {
  try {
    const userData = await getAllUsers();
    userData.users.push(newUser);
    const updatedData = JSON.stringify(userData, null, 2);
    await fsPromise.writeFile(authPath, updatedData);
    return "User has been appended.";
  } catch (err) {
    console.error("Error appending user:", err);
    throw err;
  }
}

export async function checkUserExists(username, email) {
  try {
    const userData = await getAllUsers();
    const usernameExists = userData.users.some(
      (user) => user.userName === username
    );
    const emailExists = userData.users.some((user) => user.email === email);
    return usernameExists || emailExists;
  } catch (err) {
    console.error("Error checking user existence:", err);
    throw err;
  }
}
