import { getAllUsers } from "../services/userService.js";

export async function Users(req, res) {
  try {
    const users = await getAllUsers();
    res.json(users);
  } catch (error) {
    console.error("Erreur Users:", error);
    res.status(500).json({ error: "Erreur serveur" });
  }
}
