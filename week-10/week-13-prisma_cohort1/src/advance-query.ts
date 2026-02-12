import { PrismaClient } from "../generated/prisma";

const prisma = new PrismaClient()

async function main() {
  let res = await prisma.user.findMany({
    where: {
        email: {
          endsWith: 'prisma.io',
        },
        posts: {
          /// Has atleast one post published
          some: {
            published: false,
          },
        },
      },
      include: {
        posts: {
          where: {
            published: false,
          },
        },
      },
    })
    console.log(res);
    
}

main()
