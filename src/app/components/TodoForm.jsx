"use client"
import { useState } from "react"

export default function TodoForm({onAddTodo}) {
    const [text, setText] = useState("")
    const handleChange = (event) =>{
        setText(event.target.value)
    }
    const handleSubmit = (event) => {
        event.preventDefault()
        if(text.trim()!== "") {
            onAddTodo(text);
            setText("")
        }
    }

  return (
    <div>
        <h2>Добавить задачу</h2>
        <input type="text" placeholder='Название задачи' value={text} onChange={handleChange}/>
        <button onClick={handleSubmit}>Добавить</button>
    </div>
  )
}
