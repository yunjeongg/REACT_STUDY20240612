import React, { useEffect, useRef, useState } from 'react';
import './App.css';
import MainHeader from './components/SideEffect/MainHeader';
import Home from './components/SideEffect/Home';
import Login from './components/SideEffect/Login';


const App = () => {

  // 현재 로그인 상태를 체크하는 변수
  const [isLoggedIn, setIsloggedIn] = useState(false);

  // console.log('로그인 검사 수행!');
  // localStorage에서 login-flag를 꺼냄
  // const storedLoginFlag = localStorage.getItem('login-flag');
  // 로그인 검사를 초기에 1번만 수행
  // if (storedLoginFlag === '1') {
    // 상태변수가 setter로 변경되면 
    // 리액트는 변경감지 후 바로 리렌더링을 수행함
    // setIsloggedIn(true);
  // }

  // side effect 처리를 위한 함수
  // useEffect 는 기본적으로 컴포넌트 랜더링 시 단 한번만 호출된다.
  useEffect(() => {

    // useEffect 내부에서는 Dom을 가져올 수 있다.
    // ex) document.getElementById(...)

    console.log('로그인 검사 수행!');
    const storedLoginFlag = localStorage.getItem('login-flag');
    if (storedLoginFlag === '1') {
      setIsloggedIn(true);
    }
  }, []);

  // 서버통신은 중앙집중 관리가 중요하다.
  // 로그인을 위한 요청이라 로그인 컨포넌트에서 만들수도 있지만
  // 서버와 소통할 때는 제일 상위 컨포넌트에서 집중적으로 하는것이 좋다.
  const loginHandler = (email, password) => {

    // 로그인 검증과정 했다 치고

    // 로그인의 증거로 클라이언트에 1이라는 숫자를 기록
    localStorage.setItem('login-flag', '1');

    setIsloggedIn(true); // 로그인 한 상태로 바꿔주기
  };

  const logoutHandler = () => {
    localStorage.removeItem('login-flag');
    setIsloggedIn(false);
  };

  return (
    <>
      <MainHeader onLogout={logoutHandler} />
      <main>
        {/* 로그인이 된 상태면 <Home />을 보여주고 */}
        { isLoggedIn && <Home />}

        {/* 그렇지않다면 <Login onLogin={loginHandler} */}
        { !isLoggedIn && <Login onLogin={loginHandler} />}
      </main>
    </>
  );
};

export default App;