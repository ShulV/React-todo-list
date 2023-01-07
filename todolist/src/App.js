import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';

import Header from './components/header/Header';
import TodoAddingForm from './components/todoAddingForm/TodoAddingForm';
import TodoList from './components/todoList/TodoList';

import { Container } from 'react-bootstrap';

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
    <Container>
      <Header />
      <TodoAddingForm todo={todo} setTodo={setTodo} />
      <TodoList todo={todo} setTodo={setTodo} />
    </Container>
  )
}

export default App;
