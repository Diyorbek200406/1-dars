import { useState } from "react";
import "./Todos.scss";
import ComponentModal from "../ComponentModal/ComponentModal";
const Todos = () => {
  // usesatate

  const [newTodo, setNewTodo] = useState("");
  const [todos, setTodos] = useState(() => {
    const storedTodo = localStorage.getItem("todos");
    return storedTodo ? JSON.parse(storedTodo) : [];
  });

  //   change

  const hadnleNewTodoChange = (e) => {
    setNewTodo(e.target.value);
  };

  //   submit

  const handleNewTodoSubmit = (e) => {
    e.preventDefault();

    if (!newTodo.trim()) return;
    setTodos([...todos, { id: Date.now(), text: newTodo }]);
    setNewTodo("");
  };
  //

  //
  //   localstorage

  localStorage.setItem("todos", JSON.stringify(todos));
  // delete
  const handleDelete = (id) => {
    const filterTodo = todos.filter((item) => item.id !== id);
    setTodos(filterTodo);
  };
  //   return
  return (
    <div className="todo">
      <h1>To Do List</h1>
      {/* form */}
      <form onSubmit={handleNewTodoSubmit}>
        <label>
          <input
            className="form-control"
            type="text"
            value={newTodo}
            onChange={hadnleNewTodoChange}
            placeholder="Name"
          />
        </label>
        <button type="submit" className="btn btn-info mx-1">
          Submit
        </button>
      </form>
      <ul>
        {todos.map((item, i) => (
          <li className="li" key={item.id}>
            <span className="id">{i}</span>
            <span className="text"> {item.text}</span>
            <button className="edit">
              <ComponentModal i={i} />
            </button>
            <button
              className="btn btn-info"
              onClick={() => handleDelete(item.id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
// export
export default Todos;
