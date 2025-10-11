"use client";
import { use, useState } from "react";

import estilo from "./page.module.css";

export default function Home() {
  const [mensagem, setMensagem] = useState("O react é uma biblioteca do Javascript")
  
  const [btnClicado, setBtnClicado] = useState(false)
  const [open, setOpen] = useState("Open")

  const [num, setNum] = useState(0)

function alterarNumero(){
  let numAle = Math.floor(Math.random() * (200 - 1) + 1)
  setNum(numAle)
}

  function modal(){
    if (btnClicado === true){
      setBtnClicado(false)
      setOpen('Open')
    } else{
      setBtnClicado(true)
      setOpen('Close')
    }
  }


  function alterarMensagem(){
    setMensagem("O react é um framework utilizado para aplicações web")
  }

  function exibirAlerta() {
    alert("Olá Mundo");
  }

  return (
    <div>
      <div className={estilo.cont}>
        <h2>Learning about onClick</h2>
        <button onClick={exibirAlerta} className={estilo.button}>
          Click here
        </button>
      </div>
      <div className={estilo.cont1}>
        <h2>Changing the text throug state hook</h2>
        <h1>{mensagem}</h1>
        <button onClick={alterarMensagem} className={estilo.button}>Change message</button>
      </div>
      <div className={estilo.cont}>
        <button onClick={modal} className={estilo.button}>{open}</button>
      </div>
      <div className={estilo.cont1}>
        <h2>Random number</h2>
        <p>{num}</p>
        <p>Cilck below to generate a random number</p>
        <button onClick={alterarNumero} className={estilo.button}>Generate Number</button>
      </div>
    </div>
  );
}
