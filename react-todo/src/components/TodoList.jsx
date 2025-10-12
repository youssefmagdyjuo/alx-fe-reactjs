import React, { useState } from "react";
import AddTodoForm from "./AddTodoForm";

export default function TodoList() {
  const [todos, setTodos] = useState([
    { id: 1, description: "Formik library", completed: false },
    { id: 2, description: "React Query library", completed: false },
    { id: 3, description: "SWR library", completed: false },
  ]);

  function addTodo(description) {
    const newTodo = {
      id: todos.length + 1,
      description,
      completed: false,
    };
    setTodos([...todos, newTodo]);
  }

  function toggleTodo(id) {
    const updated = todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(updated);
  }

  function deleteTodo(id) {
    setTodos(todos.filter((todo) => todo.id !== id));
  }

  return (
    <div>
      <h2>Todo List</h2>
      <AddTodoForm addTodo={addTodo} />
      <ul>
        {todos.map((todo) => (
          <li key={todo.id} data-testid="todo-item">
            <span
              onClick={() => toggleTodo(todo.id)}
              style={{
                textDecoration: todo.completed ? "line-through" : "none",
                cursor: "pointer",
              }}
            >
              {todo.description}
            </span>
            <button onClick={() => deleteTodo(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
