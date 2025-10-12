import React, { useState } from 'react'

export default function AddTodoForm({ setTasks, tasks }) {
    const [inputValue, setInputValue] = useState('')
    function addTaskFun(e) {
        e.preventDefault();
        if (!inputValue.trim()) return; 
        const newTask = {
            id: tasks.length + 1,
            description: inputValue,
            completed: false,
        };

        setTasks([...tasks, newTask]);
        setInputValue('');
    }
    return (
        <div className="add-todo-container">
            <form onSubmit={addTaskFun} className="add-todo-form">
                <input
                    type="text"
                    placeholder="Add a new task..."
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    className="todo-input"
                />
                <button type="submit" className="todo-button">
                    Add
                </button>
            </form>
        </div>
    )
}
