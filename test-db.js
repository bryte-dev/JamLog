import prisma from "./src/models/prisma.js"

async function test() {
  const user = await prisma.user.create({
    data: {
      email: "apa@gnan.com",
      name: "googoogaga",
    },
  })

  console.log(user)
  await prisma.$disconnect()
}

test()
