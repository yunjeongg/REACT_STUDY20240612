import React, { useState } from 'react';

import Card from '../UI/Card';
import styles from './Login.module.css';
import Button from '../UI/Button';

const Login = ({ onLogin }) => {
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

    // 이메일에 @ 가 포함되어있고, 비밀번호가 좌우공백제외 6글자 이상
    setFormIsValid(
      e.target.value.includes('@') && enteredPassword.trim().length > 6
    );
  };

  const passwordChangeHandler = (e) => {
    setEnteredPassword(e.target.value);

    setFormIsValid(
      e.target.value.trim().length > 6 && enteredEmail.includes('@')
    );
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
    onLogin(enteredEmail, enteredPassword);
  };

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
