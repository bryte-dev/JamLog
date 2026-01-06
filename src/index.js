import express from "express";
import authRoutes from "./routes/authRoutes.js";
import cors from "cors";

const app = express();

app.use(cors());

app.use(express.json());

app.use("/auth", authRoutes);

app.listen(3000, () => {
  console.log("Backend running on http://localhost:3000");
});
