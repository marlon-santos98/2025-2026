"use client";
import axios from "axios";
import React, { useState } from "react";
import style from "./CreatePost.module.css";

export default function Form() {

  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault()

    const novoPost = {
    title,
    body,
    userId: 1
  }

  axios.post('https://jsonplaceholder.typicode.com/posts', novoPost)
        .then(resposta => {
            console.log('Post criado com sucesso', resposta.data)
        })
  }



  return (
    <>
      <div className={style.form}>
        <h1>This API below use POST</h1>
        <form  onSubmit={handleSubmit} className={style.submit}>
          <label>Title: </label>
          <input
            type="text"
            value={title}
            placeholder="Input the title"
            onChange={(e) => setTitle(e.target.value)}
          />
          <label>Description</label>
          <textarea
            name="Description"
            id=""
            placeholder="Input the description"
            value={body}
            onChange={(e) => setBody(e.target.value)}
          ></textarea>
          
          <button>Send</button>
        </form>
      </div>
    </>
  );
}
