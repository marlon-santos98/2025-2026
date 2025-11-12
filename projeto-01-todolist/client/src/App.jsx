import { useState, useEffect } from "react"
import axios from 'axios'
import './App.css'

import FormularioTarefa from "./components/FormularioTarefa"
import ListaTarefas from "./components/ListaTarefas"

function App(){
  const [tarefas, setTarefas] = useState([])
  const API_URL = 'http://localhost:3001'


  useEffect(() => {
    const carregarTarefas = async () => {
      try {
          const resposta = await axios.get(`${API_URL}/tarefas`)
          setTarefas(resposta.data)
      } catch (error) {
        console.error('Erro ao carregar tarefas', error)
      }
    }
    carregarTarefas()
  },[])

  const handleAdicionarTarefa = async (titulo) => {
    try {
        const resposta = await axios.post(`${API_URL}/tarefas`, {
          titulo: titulo
        })
        setTarefas([...tarefas, resposta.data])
    } catch (erro) { 
      console.error("Erro ao adicionar nova tarefa", erro)
      alert("Ops, algo deu errado ao salvar.")
    }
  }

  const handleDeletarTarefa = async (id) => {
    try { 
      await axios.delete(`${API_URL}/tarefas/${id}`)
      setTarefas(tarefas.filter(t => t.id !== id))
    } catch (erro) {
      console.error("Erro ao deletar tarefa", erro)
    }
  }

  const handleToggleTarefa = async (id) => {
    try {
      const resposta = await axios.patch(`${API_URL}/tarefas/${id}/toggle`)
      const tarefaAtualizada = resposta.data
      setTarefas(tarefas.map(t => (t.id === id ? tarefaAtualizada : t)))
    } catch (erro) {
      console.error("Erro ao atualizar tarefa:", erro)
    }
  }

  return(
    <div className="container">
      <h1>Minha lista de tarefas (Fullstack!)</h1>
      <FormularioTarefa onAdicionar={handleAdicionarTarefa}/>
      <ListaTarefas
        tarefas={tarefas}
        onToggle={handleToggleTarefa}
        onDeletar={handleDeletarTarefa}
      />
    </div>
  )
}

export default App