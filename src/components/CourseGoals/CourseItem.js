import React from 'react'
import './CourseItem.css';

const CourseItem = ({ item, onDelete }) => {

  const deleteHandler = e => {
    console.log('목표를 클릭했을 때 삭제해줘!');

    // 여기서 App.js에게 삭제대상의 id를 전달
    // console.log(item.id);
    onDelete(item.id);

  }
  return (
    <li className='goal-item' onClick={deleteHandler}> {item.text} </li>
  )
}

export default CourseItem