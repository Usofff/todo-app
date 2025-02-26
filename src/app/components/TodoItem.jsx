import React from "react";

export default function TodoItem({ text, completed, onComplete, onDelete }) {
  return (
    <li>
      <span
        style={{
          textDecoration: completed ? "line-through" : "none",
          cursor: "pointer",
        }}
        onClick={onComplete}
      >
        {text} {completed ? "Выполнено" : "Не выполнено"}
      </span>
      <button
        style={{
          backgroundColor: "red",
          color: "white",
          border: "none",
          padding: "5px 10px",
          cursor: "pointer",
        }}
        onClick={onDelete}
      >
        Удалить
      </button>
    </li>
  );
}
