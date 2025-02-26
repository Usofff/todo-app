import React from "react";
import TodoItem from "./TodoItem";

export default function TodoList({ todos, onCompleteTodo, onDeleteTodo }) {
  return (
    <div>
      <h2>Список задач</h2>
      <ul>
        {todos &&
          todos.map((todo) => (
            <TodoItem
              key={todo.id}
              text={todo.text}
              completed={todo.completed}
              onComplete={()=>{onCompleteTodo(todo.id)}}
              onDelete={()=>{onDeleteTodo(todo.id)}}
            />
          ))}
      </ul>
    </div>
  );
}
