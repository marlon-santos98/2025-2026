"use client";
import axios from "axios";
import style from "./PostList.module.css"
import React, { useState, useEffect } from "react";

export default function Delete() {
  const [list, setList] = useState([]);

  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/posts`).then((resposta) => {
      setList(resposta.data);
    });
  }, []);

  function handleDelete(id) {
    axios
      .delete(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((resposta) => {
        console.log("Post deletado com sucesso", resposta.data);
        const novaLista = list.filter((post) => post.id !== id);
        setList(novaLista);
      });
  }

  return (
    <>
      <div className={style.container}>
        <h1>Working with the verb delete</h1>
        {list.map((post) => (
          <div className={style.title}>
            {post.title}
            <button onClick={() => handleDelete(post.id)}>Delete</button>
          </div>
        ))}
      </div>
    </>
  );
}
