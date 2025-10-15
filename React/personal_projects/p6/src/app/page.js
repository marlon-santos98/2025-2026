import styles from "./page.module.css";
import { retornaUfs } from "@/servicos/ufs";

const listaUfs = await retornaUfs()

export default function Home() {
  return (
    <div className={styles.main}>
      <header className={styles.header}>
        App de UFs
      </header>
      <table className={styles.tabela}>
        <thead>
          <tr>
            <th>ID</th>
            <th>UF</th>
            <th>NOME</th>
          </tr>
        </thead>
        <tbody>
          {
            Array.isArray(listaUfs) ?
            listaUfs.map((dadosUF, index)=>(
              <tr key={index}>
                <td>{dadosUF.id}</td>
                <td>{dadosUF.uf}</td>
                <td>{dadosUF.nome}</td>
              </tr>
            ))
            :
            listaUfs.erro ? 
            <tr>
              <td colSpan="3">{listaUfs.erro}</td>
            </tr>
            :
            <tr>
              <td colSpan="3">Erro ao consumir API</td>
            </tr>
          }
        </tbody>
      </table>
    </div>
  );
}
