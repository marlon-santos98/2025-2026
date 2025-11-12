const express = require('express');
const cors = require('cors');
const knexfile = require('./knexfile.js');
const knex = require('knex')(knexfile.development);

const app = express();
const PORTA = 3001;
app.use(cors());
app.use(express.json());

app.get('/tarefas', async (req, res) => {
        const tarefas = await knex('tarefas').select('*');
        res.json(tarefas);
    }
);

app.post('/tarefas', async (req, res) => {
    const {titulo} = req.body;
    if(!titulo){
        return res.status(400).json({mensagem: "O campo título é obrigatório"});
    }
        const [novaTarefa] = await knex('tarefas').insert({titulo}).returning('*');
        res.status(201).json(novaTarefa)
    }
)

app.delete('/tarefas/:id', async (req, res) => {
        const {id} = req.params
        const linhasDeletadas = await knex('tarefas').where({id}).del()

        if(linhasDeletadas === 0){
            return res.status(404).json({mensagem: "Tarefa não encontrada."})
        }
    }
)

app.patch('/tarefas/:id/toggle', async (req, res) => {
    const {id} = req.params
        const tarefaAtual = await knex('tarefas').where({id}).first()

        if (!tarefaAtual) {
        return res.status(404).json({ mensagem: "Tarefa não encontrada." });
        }
        
        const novoEstado = !tarefaAtual.concluida
        const [tarefaAtualizada] = await knex('tarefas')
            .where({id})
            .update({
                concluida: novoEstado
            })
            .returning('*')
            res.json(tarefaAtualizada)
    }
)

app.use((err, req, res, next) => {
    console.error("Erro no servidor:", err)
    res.status(500).json({mensagem: "Ocorreu um erro interno de servidor"})
})

app.listen(PORTA, () => {
    console.log(`🚀 Servidor rodando na porta http://localhost:${PORTA}`);
});