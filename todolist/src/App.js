import logo from './logo.svg';
import './App.css';
import Header from './components/header/Header'
import TodoAddingForm from './components/todoAddingForm/TodoAddingForm';
import TodoList from './components/todoList/TodoList';
import React, { useState } from 'react';

function App() {
  //тут храним состояние приложения
  const [todo, setTodo] = useState([
    {
      id:1,
      title: 'first todo',
      status: true
    },
    {
      id:2,
      title: 'second todo',
      status: true
    },
    {
      id:3,
      title: 'three todo',
      status: false
    }
  ])

  return (
    <div className="App">
      <Header />
      <TodoAddingForm />
      <TodoList todo={todo} setTodo={setTodo} />
    </div>
  );
}

export default App;
