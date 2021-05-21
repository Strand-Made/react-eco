import React from "react";
import "./TodoListItem.css";
import { IoCheckmarkCircleSharp } from "react-icons/io5";

const TodoListItem = ({ todo, onRemovePressed, onCompletedPressed }) => {
  return (
    <div className="todo-item-container">
      <h3>{todo.text}</h3>
      <div className="buttons-container">
        {todo.isCompleted ? (
          <div className="todo-completed">
            <IoCheckmarkCircleSharp size="1.5rem" />
            <p>Task completed</p>
          </div>
        ) : (
          <button
            onClick={() => onCompletedPressed(todo.text)}
            className="completed-btn"
          >
            Mark as completed
          </button>
        )}
        <button
          onClick={() => onRemovePressed(todo.text)}
          className="remove-btn"
        >
          Remove
        </button>
      </div>
    </div>
  );
};

export default TodoListItem;
