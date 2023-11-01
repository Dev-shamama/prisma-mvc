const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

async function main() {
//   const user = await prisma.user.create({
//     data: {
//       email: "ali@gmail.com",
//       name: "ALI",
//       occupation: "web dev",
//     },
//   });
const user = await prisma.user.findMany();

  console.log(user);
}

main()
  .catch(async (e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
