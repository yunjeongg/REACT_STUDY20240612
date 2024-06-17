import React from 'react'
// 1. './CourseItem.module.css' 의 변수명으로 styles 선언
import styles from './CourseItem.module.css';

const CourseItem = ({ item, onDelete }) => {

  const deleteHandler = e => {
    console.log('목표를 클릭했을 때 삭제해줘!');

    // 여기서 App.js에게 삭제대상의 id를 전달
    // console.log(item.id);
    onDelete(item.id);

  }

  // 2. 클래스이름에 {css파일의 변수명['css파일 내 적용경로']} 로 작성하기
  return (
    <li className={styles['goal-item']} onClick={deleteHandler}> {item.text} </li>
  )
}

export default CourseItem