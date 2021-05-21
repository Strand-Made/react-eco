import React, { useState } from "react";
import { connect } from "react-redux";
import { createTodo } from "./todos/actions";
import "./NewTodoForm.css";

const NewTodoForm = ({ todos, onCreatePressed }) => {
  const [inputValue, setInputValue] = useState("");

  return (
    <div className="new-todo-form">
      <h1>Add Tasks</h1>
      <div className="todo-input-group">
        <input
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          className="new-todo-input"
          type="text"
        />
        {inputValue ? (
          <span class="placeholder-top"> Add todo </span>
        ) : (
          <span class="placeholder"> Add todo </span>
        )}

        <button
          onClick={() => {
            const isDuplicateText = todos.some(
              (todo) => todo.text === inputValue
            );
            if (!isDuplicateText) {
              onCreatePressed(inputValue);
              setInputValue("");
            }
          }}
          className="new-todo-button"
        >
          Create Todo
        </button>
      </div>
    </div>
  );
};
const mapStateToProps = (state) => ({
  todos: state.todos,
});
const mapDispathToProps = (dispatch) => ({
  onCreatePressed: (text) => dispatch(createTodo(text)),
});

export default connect(mapStateToProps, mapDispathToProps)(NewTodoForm);
