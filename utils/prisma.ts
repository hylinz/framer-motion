import { PrismaClient } from "@prisma/client";

const GlobalForPrisma = globalThis as unknown as {
    prisma: PrismaClient | undefined;
}

export const db = GlobalForPrisma.prisma ?? new PrismaClient();

if (process.env.NODE_ENV === "development") {
    GlobalForPrisma.prisma = db;
}