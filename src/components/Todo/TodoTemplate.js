import React, { useState } from "react";
import './scss/TodoTemplate.scss';
import TodoHeader from "./TodoHeader";
import TodoInput from "./TodoInput";
import TodoMain from "./TodoMain";


const TodoTemplate = () => {

  const [inputDates, setInputDate] = useState([]);

  const DUMMY_TODOS = [
    { id: 1, title: '리액트 공부', done: true },
    { id: 2, title: '점심 먹기', done: false },
    { id: 3, title: '프로젝트하기', done: false },
    { id: 4, title: '숙제하기', done: false },
  ];

  const addInputHandler = (inputDateObject) => {
    console.log("값", inputDateObject);
  }

  return (
    <div className='TodoTemplate'>
      <TodoHeader />
      <TodoMain todos={DUMMY_TODOS} />
      <TodoInput />
    </div>
  );
};

export default TodoTemplate;