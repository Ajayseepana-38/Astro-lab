import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  console.log("🌱 Database Seed Ready");
}

main()
  .catch(console.error)
  .finally(async () => {
    await prisma.$disconnect();
  });