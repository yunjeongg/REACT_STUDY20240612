import React, { useEffect, useState } from 'react';

import Card from '../UI/Card';
import styles from './Login.module.css';
import Button from '../UI/Button';

const Login = ({ onLogin }) => {

  // console.log("랜더링 수행! ");

  // 사용자가 입력한 이메일을 상태관리
  const [enteredEmail, setEnteredEmail] = useState('');
  // 이메일 입력값이 정상인지 유무 확인 (true & false)
  const [emailIsValid, setEmailIsValid] = useState();
  // 사용자가 입력한 패스워드를 상태관리
  const [enteredPassword, setEnteredPassword] = useState('');
  // 패스워드 입력값이 정상인지 유무 확인
  const [passwordIsValid, setPasswordIsValid] = useState();

  // 이메일, 패스워드가 둘 다 정상인지 확인
  const [formIsValid, setFormIsValid] = useState(false);

  // 이메일을 입력할 때 마다 입력값이 등록
  const emailChangeHandler = (e) => {
    setEnteredEmail(e.target.value);
  };

  const passwordChangeHandler = (e) => {
    setEnteredPassword(e.target.value);
  };

  const validateEmailHandler = () => {
    setEmailIsValid(enteredEmail.includes('@'));
  };

  const validatePasswordHandler = () => {
    setPasswordIsValid(enteredPassword.trim().length > 6);
  };


  // 로그인 버튼 눌렀을 때 onLogin 함수에 두 파라미터 전달
  const submitHandler = (e) => {
    e.preventDefault();
    // App.js 에서 받은 로그인핸들러 호출
    onLogin(enteredEmail, enteredPassword);
  };

  // 1. 맨 뒤에 [] 배열을 안 넣으면 계속 작동
  // useEffect (() => {
  //   console.log('useEffect call in Login.js ');
  // })

  // 2. [] 배열을 비워놓으면 최초 한번만 작동
  // 3. [] 배열 안에 값 넣으면 값이 변할 때마다 작동
  // 4. 결론설명 - 교안의 결론 3개
  useEffect (() => {

    const timer = setTimeout(() => {
      console.log('useEffect call in Login.js ');

      // 실행하겠다
    setFormIsValid(
      enteredPassword.trim().length > 6 && enteredEmail.includes('@')
    );
    }, 1000);

    return () => {
      // clean up 함수는 컴포넌트가 업데이트 되거나 사라지기 전에 실행한다.
      // 그렇기 때문에 변경 전의 enteredEmail 을 갖고있다.
      // console.log('cleanup: ', enteredEmail);

      // Debouncing, Throttling 에 많이 사용한다.
      // 입력시 마다 바로 호출하는 것이 아니라 기다렸다가 호출

      // 
      clearTimeout(timer);
    };

    // 아래 배열의 값이 바뀔 때 마다
  }, [enteredEmail, enteredPassword])

  console.log('render: ', enteredEmail);

  return (
    <Card className={styles.login}>
      <form onSubmit={submitHandler}>
        <div
          className={`${styles.control} ${ // 이메일 입력이 제대로 안됐을 경우 스타일 추가
            emailIsValid === false ? styles.invalid : ''
          }`}
        >
          <label htmlFor="email">E-Mail</label>
          <input
            type="email"
            id="email"
            value={enteredEmail}
            // 포커스 이벤트 = 커서를 얻었을 때
            // 블러이벤트 = 커서를 잃었을 때
            onChange={emailChangeHandler}
            onBlur={validateEmailHandler}
          />
        </div>
        <div
          className={`${styles.control} ${
            passwordIsValid === false ? styles.invalid : ''
          }`}
        >
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={enteredPassword}
            onChange={passwordChangeHandler}
            onBlur={validatePasswordHandler}
          />
        </div>
        <div className={styles.actions}>
          <Button type="submit" 
                  className={styles.btn} 
                  disabled={!formIsValid}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
