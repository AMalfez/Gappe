const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const userData = {
  username: "Testuser",
  name: "Test User",
  image: "https://example.com",
  bio: "This is a sample bio",
  userId: "125",
};
const gappaData = {
  message: "This is a gappa for example."
}

async function main() {
  console.log(`Start seeding ...`);
  await prisma.users.create({
    data: {
      ...userData,
      gappe: {
        create:[gappaData]
      }
    },
  });
  console.log(`Seeding finished.`);
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
