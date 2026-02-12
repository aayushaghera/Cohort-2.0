import { PrismaClient } from '../generated/prisma'

const prisma = new PrismaClient()

async function main() {
  // ... you will write your Prisma Client queries here
    const user = await prisma.user.create({
    data: {
      name: 'Alice2',
      email: 'alice@prismaa.io',
    },
  })
  console.log(user)
}

main();
