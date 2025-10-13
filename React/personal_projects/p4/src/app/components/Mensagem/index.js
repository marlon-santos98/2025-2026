import estilos from "./Mensagem.module.css"

export default function Mensagem(props){
    return(
        <div className={estilos.card}>
            <h2>Mensagem</h2>
            {props.children}
        </div>
    )
}