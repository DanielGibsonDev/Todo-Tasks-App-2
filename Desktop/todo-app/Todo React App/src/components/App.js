import './styles.css';
import React, { useState, useEffect } from 'react';
import CreateTodo from './CreateTodo';
import TodoList from './TodoList';
import Footer from './Footer';
import iconSun from '../images/icon-sun.svg';
import iconMoon from '../images/icon-moon.svg';

const App = () => {
  const [todos, setTodos] = useState([]);
  const [filterSelected, setFilterSelected] = useState('all')

  // Get Local Storage
  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem("todos"));
    storedTodos && setTodos(storedTodos);
  }, []);

  // Update Local Storage
  useEffect(() => {
    todos.length && localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const onCreateNewTodo = (todo) => {
    setTodos(todos => [...todos, todo]);
  };

  const handleFilterChange = (filterType) => {
    setFilterSelected(filterType);
  }

  const handleTodoAction = (action, index) => {
    const copyOfTodos = todos.slice();

    if (action === 'completed') {
      copyOfTodos[index].completed = !copyOfTodos[index].completed;

    } else if (action === 'delete') {
      copyOfTodos.splice(index, 1);

    } else if (action === 'clear') {
      for (let i = copyOfTodos.length - 1; i >= 0; i--) {
        copyOfTodos[i].completed && copyOfTodos.splice(i, 1);
      };
    };

    setTodos(copyOfTodos);
  };

  return (
    <div className="app">
      <div className="content-wrapper">
        <div className="header">
          <h1 className="dark-theme">Todo</h1>
          <img className="icon" src={iconMoon} alt="Dark Theme" />
        </div>
        <CreateTodo onFormSubmit={onCreateNewTodo} />
        <TodoList
          todos={todos}
          handleTodoAction={handleTodoAction}
          filterType={filterSelected}
        />
        <Footer
          todos={todos}
          handleTodoAction={handleTodoAction}
          handleFilterChange={handleFilterChange}
        />
        <div className="drag-text">Drag and drop to reorder list</div>
        <div className="attribution">
          Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. Coded by <a href="https://github.com/DanielGibsonJS" target="_blank">Daniel Gibson</a>.
        </div>
      </div>
    </div>
  );
};

export default App;

// Background and header - App.js
// Create a new todo - input field, submit adds to list
// List of todos - array of objects - Completed yes/no and todo name
// footer - # items left, filter, clear


