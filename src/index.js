import express from "express";
import prisma from "./models/prisma.js";

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Backend en marche frérot 💪");
});

app.get("/test", async (req, res) => {
  res.json({ message: "Route test OK" });
});

app.listen(3000, () => {
  console.log("Backend démarré sur le port 3000 !");
});
