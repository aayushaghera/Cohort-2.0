import { PrismaClient } from "../generated/prisma"

const prisma = new PrismaClient()

async function main() {
  // Step 1: Delete all unpublished posts of user id 1
  await prisma.post.deleteMany({
    where: {
      authorId: 1,
      published: false
    }
  });

  // Step 2: Delete the user
  await prisma.user.delete({
    where: {
      id: 1
    }
  });
}

main()
