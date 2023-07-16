import React from "react";

const ToDoList = ({ todos, onDeletetodo }) => (
  <ul>
    {todos.map(({id, text}) => (
      <li key={id}>
        <p>{text}</p>
        <button onClick={()=>{onDeletetodo(id)}}>Удалить</button>
      </li>
    ))}
  </ul>
);

export default ToDoList;

    