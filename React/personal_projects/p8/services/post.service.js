const prisma = require("../db/prisma") 


async function fetchAllPosts(){
    const dados = await prisma.post.findMany()
    return dados
}

module.exports = {
    fetchAllPosts
}