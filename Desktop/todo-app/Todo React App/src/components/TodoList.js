import './styles.css';
import React from 'react';
import Checkbox from './Checkbox';
import IconCross from '../images/icon-cross.svg';

const TodoList = ({ todos, handleTodoAction, filterType }) => {

  const renderedTodos = todos.map((todo, index) => {

    if (filterType === 'active' && todo.completed) return

    if (filterType === 'completed' && !todo.completed) return

    return (
      <div className="item-container list-item" key={index}>
        <div className={`item-container-2 ${todo.completed && 'completed-todo'}`}>
          <Checkbox
            completed={todo.completed}
            handleTodoAction={handleTodoAction}
            index={index}
          />
          {todo.todo}
        </div>
        <img
          className="icon-cross"
          src={IconCross}
          alt="Delete Todo"
          onClick={() => handleTodoAction('delete', index)}
        />
      </div>
    );
  });

  return (
    <div className="todo-list">
      {renderedTodos}
    </div>
  );
};

export default TodoList;
