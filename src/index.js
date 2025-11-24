import dotenv from "dotenv";
import express from "express";


dotenv.config();
const app = express();
app.use(express.json());

// Route de test
app.get("/", (req, res) => {
  res.send("Backend Express opérationnel !");
});


// Démarre le serveur
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Serveur lancé sur le port ${PORT}`);
});