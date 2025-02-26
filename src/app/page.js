"use client";
import Image from "next/image";
import styles from "./page.module.css";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import { useState } from "react";

export default function Home() {
  const [todos, setTodos] = useState([
    { id: 1, text: "Купить продукты", completed: false },
    { id: 2, text: "Записаться к врачу", completed: true },
    { id: 3, text: "Прочитать книгу", completed: false },
  ]);
  const handleAddTodo = (text) => {
    const newTodo = {
      text,
      completed: false,
      id: Date.now(),
    };
    setTodos([...todos, newTodo]);
  };

  const handleCompleteToto = (id) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, completed: !todo.completed };
      } else {
        return todo;
      }
    });
    setTodos(updatedTodos);
  };

  const handleDeleteTodo = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };
  return (
    <div>
      <h1>To-Do list</h1>
      <TodoForm onAddTodo={handleAddTodo} />
      <TodoList
        todos={todos}
        onCompleteTodo={handleCompleteToto}
        onDeleteTodo={handleDeleteTodo}
      />
    </div>
  );
}
