import { getUsers } from "../model/user.model.js";

export async function getTodos(req, res) {
  const userData = req.user;
  const parsedUser = await getUsers();
  const users = parsedUser.users;
  if (userData.username && userData.username.trim() !== "") {
    // Perform a case-insensitive and trimmed comparison
    const resUser = users.find(
      (u) =>
        u.name.trim().toLowerCase() === userData.username.trim().toLowerCase()
    );

    console.log("resUser:", resUser); // Add this line for debugging

    if (resUser) {
      // The user was found
      const data = {
        id: resUser.id,
        todos: resUser.todos,
      };
      res.json({ msg: "User data fetched successfully", data: data });
    } else {
      // The user was not found
      res.status(404).json({ error: "User not found" });
    }
  } else {
    // Handle the case where userData.userName is not defined or empty
    res.status(400).json({ error: "Invalid user data" });
  }
}
