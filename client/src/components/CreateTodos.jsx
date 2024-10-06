import React, { useState } from "react";

function CreateTodos({ fetchTodos }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const handleClick = () => {
    fetch(`${import.meta.env.VITE_API_URL}/todo`, {
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
        fetchTodos();
        setTitle("");
        setDescription("");
        alert("Todo Added Successfully");
      });
  };
  return (
    <div className="center-div col">
      <input
        type="text"
        placeholder="Enter a title"
        onChange={(event) => {
          setTitle(event.target.value);
        }}
      />
      <input
        type="text"
        placeholder="Enter a description"
        onChange={(event) => {
          setDescription(event.target.value);
        }}
      />
      <button type="submit" onClick={handleClick}>
        Add Todo
      </button>
    </div>
  );
}

export default CreateTodos;
