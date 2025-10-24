"use client";
import axios from "axios";
import React, { useState, useEffect } from "react";

export default function EditPost({ postId }) {
  const [body, setBody] = useState("");
  const [title, setTitle] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedPost = {
      title,
      body,
    };
    axios
      .patch(
        `https://jsonplaceholder.typicode.com/posts/${postId}`,
        updatedPost
      )
      .then((resposta) => {
        console.log("Post atualizado", resposta.data);
      });
  };

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${postId}`)
      .then((resposta) => {
        setBody(resposta.data.body);
        setTitle(resposta.data.title);
        console.log("Post atualizado com sucesso", resposta.data);
      });
  }, [postId]);

  return (
    <>
      <div>
        <h1>Api using the method update</h1>
        <form onSubmit={handleSubmit}>
          <label>Title: </label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <label> Description: </label>
          <textarea
            type="text"
            value={body}
            onChange={(e) => setBody(e.target.value)}
          />
          <button>Submit</button>
        </form>
      </div>
    </>
  );
}
