import React, { useState } from 'react'
import AddTodoForm from './AddTodoForm'

export default function TodoList() {
    const [tasks,setTasks] = useState(
        [
        {
            id:1,
            description:'Formik library',
            completed:false
        },
        {
            id:2,
            description:'React Query library',
            completed:false
        },
        {
            id:3,
            description:'SWR library',
            completed:false
        }
    ]
    )
    function handleChicked(id){
        const updatedTasks=tasks.map(task=>(
            task.id==id?{...task,completed:!task.completed}:task
        )
        )
        setTasks(updatedTasks)
    }
    function handleDelete(id){
        const updatedTasks = tasks.filter(task=>(
            task.id!=id
        ))
        setTasks(updatedTasks)
    }
    return (
        <>
            <AddTodoForm tasks={tasks} setTasks={setTasks}/>
        <div className="task-container">
            <ul className="task-list">
        {
            tasks==''?(
                <div style={{color:'#666',textAlign:'center'}}>no tasks</div>
            ):(
                tasks.map((task)=>(
                <li 
                className={`task-item ${task.completed ? "completed" : ""}`}
                key={task.id}>
                    <input 
                    onChange={()=>{handleChicked(task.id)}}
                    className="task-checkbox" 
                    type='checkbox' 
                    checked={task.completed} />
                    <p className="task-desc">{task.description}</p>
                    <button 
                    onClick={()=>{handleDelete(task.id)}}
                    className="delete-btn">Delete</button>
                </li>
            ))
            )
        }
        </ul>
        </div>
        </>
    )
}
