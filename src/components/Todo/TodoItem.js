import React, { useState } from 'react';

// 리액트 css icons
// https://react-icons.github.io/react-icons/icons/md/
import {MdDelete, MdDone} from "react-icons/md";

import './scss/TodoItem.scss';

const TodoItem = ({ item }) => {

  const { title, done } = item;
  
  return (
    <li className='todo-list-item'>
      <div className='check-circle'>
        {done && <MdDone/>}
      </div>
      <span className='text'>{title}</span>
      <div className='remove'>
        <MdDelete/>
      </div>
    </li>
  );
};

export default TodoItem;