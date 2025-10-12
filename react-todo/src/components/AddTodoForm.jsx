import React, { useState } from "react";

export default function AddTodoForm({ addTodo }) {
  const [inputValue, setInputValue] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (!inputValue.trim()) return;
    addTodo(inputValue.trim());
    setInputValue("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Add a new todo..."
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button type="submit">Add</button>
    </form>
  );
}
