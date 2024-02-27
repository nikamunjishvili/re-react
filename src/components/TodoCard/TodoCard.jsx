import React from "react";
import "./todo.css";

const TodoCard = ({todoId,checkTodoFunction, todo,deleteTodoFunction}) => {
  return (
    <div className="todo" style={{ display: "flex", gap: "20px" }} key={todoId}>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => checkTodoFunction(todoId)}
      />
      <li
        style={{
          listStyle: "none",
          textDecoration: todo.completed ? "line-through" : "none",
          color: todo.completed ? "grey" : "black",
        }}
      >
        {todo.text}
      </li>
      <button onClick={() => deleteTodoFunction(todo.text)}>X</button>
    </div>
  );
};

export default TodoCard;
