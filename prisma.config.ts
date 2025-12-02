import 'dotenv/config';
import { defineConfig } from "prisma/config";

export default defineConfig({
  schema: "prisma/schema.prisma",
  migrations: {
    path: "prisma/migrations",
  },
  // Obligatoire pour PrismaClient
  datasources: {
    db: {
      provider: "postgresql",
      url: process.env.DATABASE_URL,
    },
   },
   // Obligatoire pour Prisma Migrate
   datasource: {
     db: {
       provider: "postgresql",
       url: process.env.DATABASE_URL,
     },
   },
});
