import estilo from "./Card.module.css"

export default function Card(props){
    return(
        <>
            <div className={estilo.card}>
                <h3>{props.nome}</h3>
                <p>R${props.preco}</p>
                <small>{props.tipo}</small>
                <button>Adicionar</button>
            </div>
        </>
    )
}