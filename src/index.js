import express from "express";
import userRoutes from "./routes/userRoutes.js";
import { PORT } from "./config/env.js";

const app = express();

app.use(express.json());

// test route
app.use("/api", userRoutes);

app.listen(PORT, () => {
  console.log(`Backend démarré sur le port ${PORT}`);
});
