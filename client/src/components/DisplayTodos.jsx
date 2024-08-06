function DisplayTodos({ todos, fetchTodos }) {
  const handleCompletedClick = (id) => {
    fetch("http://localhost:3000/completed", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json; charset=UTF-8",
      },
      body: JSON.stringify({ id }),
    })
      .then((res) => res.json())
      .then(() => {
        fetchTodos();
        alert("Todo Updated Successfully");
      });
  };

  const handleDelete = (id) => {
    fetch("http://localhost:3000/delete", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json; charset=UTF-8",
      },
      body: JSON.stringify({ id }),
    })
      .then((res) => res.json())
      .then(() => {
        fetchTodos();
        alert("Todo Deleted Successfully");
      });
  };

  return (
    <div id="main">
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Description</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {todos.map((todo) => (
            <tr key={todo._id}>
              <td>{todo.title}</td>
              <td>{todo.description}</td>
              <td>
                <button
                  disabled={todo.completed}
                  onClick={() => handleCompletedClick(todo._id)}
                >
                  {todo.completed ? "Completed" : "Mark as complete"}
                </button>
                <button
                  className="delete-btn"
                  onClick={() => handleDelete(todo._id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default DisplayTodos;
