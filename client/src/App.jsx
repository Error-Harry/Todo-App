import "./App.css";
import React, { useState, useEffect } from "react";
import CreateTodos from "./components/CreateTodos";
import DisplayTodos from "./components/DisplayTodos";

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = () => {
    fetch("http://localhost:3000/todos")
      .then((res) => res.json())
      .then((data) => {
        setTodos(data.allTodos);
      });
  };
  return (
    <>
      <h1 className="center-div">Todo App</h1>
      <CreateTodos fetchTodos={fetchTodos} />
      <DisplayTodos todos={todos} fetchTodos={fetchTodos} />
    </>
  );
}

export default App;
