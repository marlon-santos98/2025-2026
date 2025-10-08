import estilos from './novapagina.module.css'
import Link from "next/link";

export default function NovaPagina(){
    return(
        <main className={estilos.main_container}>
            <div className={estilos.card_container}>
                <h1>Nova pagina</h1>
                <p>Essa e a nova pagina</p>
                <p>Primeira pagina criada</p>
                <Link href="/">Link para a página inicial</Link>
            </div>
        </main>
    )
}