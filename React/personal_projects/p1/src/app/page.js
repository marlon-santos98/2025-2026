import style from './page.module.css'

export default function Home() {
  return (
    <>
      <div>
        <h3 className={style.h3}>React JS</h3>
      </div>
      <div className={style.conteudo_central}>
        <h2>React JS</h2>
        <h3>Biblioteca JavaScript para criar SPAs</h3>
        <button>Site oficial</button>
      </div>
      <div className={style.requisitos}>
        <div>
          <h2>Requisitos</h2>
          <h3>Veja abaixo os requisitos minimos para aprender React JS:</h3>
        </div>
        <div className={style.card_maior}>
          <div className={style.card}>
            <h4>HTML</h4>
            <p>Aprender a estruturar os elementos da página com html</p>
          </div>
          <div className={style.card}>
            <h4>CSS</h4>
            <p>Aprender a estilizar os elementos da página com css</p>
          </div>
          <div className={style.card}>
            <h4>JAVASCRIPT</h4>
            <p>Aprender a linguagem utilizada pelo React JS</p>
          </div>
        </div>
      </div>
      <footer className={style.footer}>
          Curso de introdução de React JS
      </footer>
    </>
  );
}
