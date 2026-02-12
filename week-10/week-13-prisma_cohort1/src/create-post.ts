
import { PrismaClient } from "../generated/prisma"

const prisma = new PrismaClient()

async function main() {
  const post = await prisma.post.create({
    data: {
     title: "title of post3",
     content : "hello",
     author: {
        connect: {
            id: 2
        }
     },
    //  authorId : 1
    }
  })
  console.log(post)
}

main()