import { Router } from "express";
import { testUsers } from "../controllers/userController.js";

const router = Router();

router.get("/users", testUsers);

export default router;
