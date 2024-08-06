import React, { useState } from "react";

function CreateTodos({ fetchTodos }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const handleClick = () => {
    fetch("http://localhost:3000/todo", {
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=UTF-8",
      },
      body: JSON.stringify({
        title: title,
        description: description,
      }),
    })
      .then((res) => {
        return res.json();
      })
      .then(() => {
        fetchTodos()
        alert("Todo Added Successfully");
        setTitle("");
        setDescription("");
      });
  };
  return (
    <div>
      <input
        type="text"
        placeholder="Enter a title"
        onChange={(event) => {
          setTitle(event.target.value);
        }}
      />
      <br />
      <br />
      <input
        type="text"
        placeholder="Enter a description"
        onChange={(event) => {
          setDescription(event.target.value);
        }}
      />
      <br />
      <br />
      <button type="submit" onClick={handleClick}>
        Add Todo
      </button>
    </div>
  );
}

export default CreateTodos;
