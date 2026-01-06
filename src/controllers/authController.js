import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import prisma from "../models/prisma.js";

export const register = async (req, res) => {
  const { email, password, username } = req.body;

  const hash = await bcrypt.hash(password, 10);

  const user = await prisma.user.create({
    data: {
      email,
      username,
      passwordHash: hash,
    },
  });

  res.json({ id: user.id });
};

export const login = async (req, res) => {
  const { email, password } = req.body;

  const user = await prisma.user.findUnique({ where: { email } });
  if (!user) return res.status(401).json({ error: "Invalid credentials" });

  const ok = await bcrypt.compare(password, user.passwordHash);
  if (!ok) return res.status(401).json({ error: "Invalid credentials" });

  const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET);

  res.json({ token });
};
