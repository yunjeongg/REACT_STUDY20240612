import React, { useState } from "react";
import './scss/TodoTemplate.scss';
import TodoHeader from "./TodoHeader";
import TodoInput from "./TodoInput";
import TodoMain from "./TodoMain";

const DUMMY_TODOS = [
  { id: 1, title: '리액트 공부', done: true },
  { id: 2, title: '점심 먹기', done: false },
  { id: 3, title: '프로젝트하기', done: false },
  { id: 4, title: '숙제하기', done: false },
];

const TodoTemplate = () => {

  const [todoList, setTodoList] = useState(DUMMY_TODOS);

  const makeNewId = () => {
    // 데이터가 없을 경우 id 는 1
    if (todoList.length === 0) return 1;
    // 그렇지 않을 경우 더미데이터 맨 끝 id 
    return todoList[todoList.length - 1].id + 1;
  };

  // 데이터 상향식 전달을 위한 함수를 생성 
  // (TodoInput에서 할 일을 끌어올리는 역할)
  const addTodo = (newTitle) => {
    const newTodo = {
      id: makeNewId(),
      title: newTitle,
      done: false
    };

    // console.log('new: ', newTodo);
    
    setTodoList(prevTodoList => [...prevTodoList, newTodo]);
  };

  // 삭제를 위한 id 끌어올리기
  const removeTodo = id => {
    // 필터링을 통한 제거
    // 필터함수는 기본적으로 원본배열이 아닌, 복사된 배열을 주기 때문에 배열복사하지않아도 된다.

    // 아이디가 같지않은 것들만 모아놓는다 -> 같으면 삭제
    setTodoList(todoList.filter(todo => todo.id !== id));

    // 서버와 연동했을 경우
    // const res = await fetch(url, {method:'DELETE'});
    // const todoList = await res.json();
    // setTodoList(todoList);
  };

  return (
    <div className='TodoTemplate'>
      <TodoHeader />
      <TodoMain todos={todoList} onRemove={removeTodo} />
      <TodoInput onAdd={addTodo} />
    </div>
  );
};

export default TodoTemplate;