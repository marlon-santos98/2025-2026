const express = require('express')
const postRouter = require('./routes/post.routes')

const app = express()
const PORT = 3001

app.use('/posts', postRouter)


app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`)
})