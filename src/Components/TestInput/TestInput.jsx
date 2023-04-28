import { useState } from "react";
import "./testInput.scss";
const Todos = () => {
  const [newTodo, setNewTodo] = useState("");
  const [editingTodo, setEditingTodo] = useState(null);
  const [buttonText, setButtonText] = useState("Submit");

  const [todos, setTodos] = useState(() => {
    const storedTodo = localStorage.getItem("todos");
    return storedTodo ? JSON.parse(storedTodo) : [];
  });

  const handleNewTodoChange = (e) => {
    setNewTodo(e.target.value);
  };

  const handleNewToDoSubmit = (e) => {
    e.preventDefault();

    if (!newTodo.trim()) return;

    if (editingTodo !== null) {
      const updateTodo = todos.map((todo) => {
        if (todo.id === editingTodo) {
          return { ...todo, text: newTodo };
        } else {
          return todo;
        }
      });
      setTodos(updateTodo);
      setEditingTodo(null);
      setButtonText("Submit");
      setNewTodo("");
    } else {
      setTodos([...todos, { id: Date.now(), text: newTodo }]);
      setNewTodo("");
      setButtonText("Submit");
    }
  };

  localStorage.setItem("todos", JSON.stringify(todos));

  const handleDeleteToDo = (id) => {
    const updateToDos = todos.filter((item) => item.id !== id);
    setTodos(updateToDos);
  };

  const handleEditTodo = (id) => {
    const todoEdit = todos.find((todo) => todo.id === id);
    setEditingTodo(id);
    setNewTodo(todoEdit.text);
    setButtonText("Save");
  };

  return (
    <div className="mx-5 text-center">
      <h1>To Do List</h1>
      <form className="form form-control" onSubmit={handleNewToDoSubmit}>
        <label>
          Name:
          <input type="text" value={newTodo} onChange={handleNewTodoChange} />
        </label>
        <button type="submit">{buttonText}</button>
        {editingTodo !== null && (
          <button
            type="button"
            onClick={() => {
              setEditingTodo(null);
              setNewTodo("");
              setButtonText("Submit");
            }}
          >
            Cencel
          </button>
        )}
      </form>
      <ul>
        {todos.map((item) => (
          <li key={item.id}>
            <span>{item.text}</span>
            <button onClick={() => handleDeleteToDo(item.id)}>Delete</button>
            <button onClick={() => handleEditTodo(item.id)}>Edit</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todos;
