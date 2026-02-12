
import { PrismaClient } from "../generated/prisma"

const prisma = new PrismaClient()

async function main() {
  const updateUser = await prisma.user.update({
    where: {
        id: 1
    },
    data: {
        name: "neha2@gmail.com"
    }
  })
  console.log(updateUser);
}

main()
