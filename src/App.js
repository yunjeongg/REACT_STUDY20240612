// useRef 사용시 import 해야 한다.
import React, { Fragment, useRef, useState } from 'react';
import './App.css';
import AddUsers from './components/Users/AddUsers';
import UserList from './components/Users/UserList';
import ErrorModal from './components/UI/Modal/ErrorModal';


const App = () => {

  // 회원들이 저장될 배열 (현재빈배열)
  const [userList, setUserList] = useState([]);

  // useRef 사용하기
  const count = useRef(1);
  console.log('count', count);

  const addUserHandler = user => { // 신규유저데이터 저장

    // 유저수가 증가할 때 마다 카운터수도 증가시키기
    count.current++;
    console.log('count.current', count.current);

    console.log(user);
    setUserList(prev => [ // 기존유저 받아와서
      ...prev,  // 기존유저 넣고
      {
        ...user, // 신규유저의 정보 넣고
        id: Math.random().toString()}]); // 추가로 아이디값을 넣기
  };

  return (
    <>
      <AddUsers onAddUser={addUserHandler} />
      <UserList users={userList} />
    </>
  );
};

export default App;