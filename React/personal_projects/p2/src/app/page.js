import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <>
    <main className={styles.main}> 
      <div className={styles.card_container}>
        <h1>Pagina Inicial</h1>
        <p>Pagina principal</p>
        <p>Gerada automaticamente</p>
        <Link href="/novapagina">Link para a página inicial</Link>
      </div>
    </main>
    </>
  );
}
