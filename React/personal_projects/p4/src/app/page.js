import Image from "next/image";
import styles from "./page.module.css";

import Card from "./components/Card";
import Mensagem from "./components/Mensagem";

export default function Home() {
  return (
    <div className={styles.cont}>
      <h1>Utilizando Props</h1>
      <Card nome={"Hamburguer"} preco={20} tipo={"lanche"} />
      <Card nome={"Coca cola"} preco={2} tipo={"Bebida"} />
      <Card nome={"Brigadeiro"} preco={4} tipo={"doce"} />
      <h1>Tags e componentes via props</h1>
      <Mensagem>
        <p>Passando a tag o no box mensagem</p>
        <button>Clique aqui</button>
        <p>Passando outra tag <strong>P</strong></p>
      </Mensagem>
    </div>
  );
}
