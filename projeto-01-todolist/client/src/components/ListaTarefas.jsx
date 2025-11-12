function ListaTarefas({tarefas, onToggle, onDeletar}){
    return(
    <ul>
        {tarefas.map((tarefa) => (
        <li key={tarefa.id}
            style={{
            textDecoration: tarefa.concluida ? 'line-through' : 'none',
            opacity: tarefa.concluida ? 0.5 : 1
        }}>
            {tarefa.titulo}
            <button onClick={() => onToggle(tarefa.id)}>{tarefa.concluida ? 'Desmarcar' : 'Concluir'}</button>
            <button onClick={() => onDeletar(tarefa.id)}>Deletar</button>
        </li>
        ))}
    </ul>
    )
}

export default ListaTarefas