import React from 'react';

import './scss/TodoMain.scss';
import TodoItem from "./TodoItem";

const TodoMain = ({ todos }) => {
  return (
    <ul className='todo-list'>
      {
        todos.map(todo => <TodoItem key={todo.id} item={todo} />)
      }
    </ul>
  );
};

export default TodoMain;