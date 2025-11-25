import prisma from "../models/prisma.js";

export async function getAllUsers() {
  return prisma.user.findMany();
}
