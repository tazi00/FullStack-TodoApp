import fsPromise from "fs/promises";
import { usersPath } from "../utils/filepaths.js";
export async function getUsers() {
  try {
    const getData = await fsPromise.readFile(usersPath);
    const parsedData = JSON.parse(getData);
    return parsedData;
  } catch (err) {
    console.error("Error reading user data:", err);
    throw err;
  }
}

export async function setUserData(newUser) {
  try {
    const userData = await getUsers();
    const newUserObject = {
      id: newUser.id,
      name: newUser.userName,
      img: newUser.img || "", // Default to an empty string if img is not provided
      email: newUser.email,
      todos: [],
      friends: [],
      // Default to an empty array if todos are not provided
      // Add other keys as needed
    };

    userData.users.push(newUserObject);
    const updatedData = JSON.stringify(userData, null, 2);
    await fsPromise.writeFile(usersPath, updatedData);
  } catch (err) {
    console.error("Error updating user data:", err);
    throw err;
  }
}
