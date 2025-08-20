import { prisma } from "../models/prisma.js";

export async function connectDatabase(): Promise<void> {
  await prisma.$connect();
}

export async function disconnectDb(): Promise<void> {
  await prisma.$disconnect();
}
