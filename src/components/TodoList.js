import React from "react";
import Todo from "./Todo";

const TodoList = ({ todos, setTodos }) => {
  const AllTodos = todos.map((todo) => (
    <Todo key={todo.id} todo={todo} setTodos={setTodos} todos={todos} />
  ));

  return (
    <div className="todo-container">
      <ul className="todo-list">{AllTodos}</ul>
    </div>
  );
};

export default TodoList;
