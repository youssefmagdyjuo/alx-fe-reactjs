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
      id: todos.length ? Math.max(...todos.map(t => t.id)) + 1 : 1,
      description,
      completed: false,
    };
    setTodos(prev => [...prev, newTodo]);
  }

  function toggleTodo(id) {
    setTodos(prev =>
      prev.map(t => (t.id === id ? { ...t, completed: !t.completed } : t))
    );
  }

  function deleteTodo(id) {
    setTodos(prev => prev.filter(t => t.id !== id));
  }

  return (
    <div>
      <h2>Todo List</h2>
      <AddTodoForm addTodo={addTodo} />
      <ul>
        {todos.map(todo => (
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
