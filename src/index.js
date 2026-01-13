import express from "express";
import authRoutes from "./routes/authRoutes.js";
import cors from "cors";

const app = express();

app.use(express.json());

app.use(cors({
  origin: "http://192.168.100.15:8081",
  methods: ["GET","POST","PUT","DELETE","OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
}));

app.use("/auth", authRoutes);

app.listen(3000, () => {
  console.log("Backend running on http://localhost:3000");
});
