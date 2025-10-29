const postService = require('../services/post.service')

async function getAllPosts(req, res){
    const dados = await postService.fetchAllPosts()
    res.send(dados)
}

module.exports = {
    getAllPosts
}