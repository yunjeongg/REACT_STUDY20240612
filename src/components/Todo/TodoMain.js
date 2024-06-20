import React from 'react';

import './scss/TodoMain.scss';
import TodoItem from "./TodoItem";

const TodoMain = ({ todos, onRemove}) => {
  return (
    <ul className='todo-list'>
      {
        todos.map(todo => <TodoItem key={todo.id} item={todo} onRemove={onRemove}/>)
      }
    </ul>
  );
};

export default TodoMain;