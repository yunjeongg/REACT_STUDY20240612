import React, { useState } from 'react';
import styles from './AddUsers.module.css';
import Card from '../UI/Card';
import Button from '../UI/Button';

const AddUsers = ({ onAddUser }) => {
  const [userValue, setUserValue] = useState({ // 사용자이름과 사용자나이 관리
    username: '', 
    age: '', 
  });

  const usernameChangeHandler = (e) => {
    setUserValue((prevUserValue) => ({ // 이전값 가져오고 username만 수정
      ...prevUserValue,
      username: e.target.value,
    }));
  };

  const ageChangeHandler = (e) => {
    setUserValue((prevUserValue) => ({ // 이전값 가져오고 age만 수정
      ...prevUserValue,
      age: e.target.value,
    }));
  };

  const userSubmitHandler = (e) => {
    e.preventDefault();

    // 입력값 검증
    if (userValue.username.trim() === '' || userValue.age.trim() === '') {
      return; // 이름과 나이가 빈칸이면 return
    }

    if (+userValue.age < 1) return;

    onAddUser(userValue);

    setUserValue({ // 초기화
      username: '',
      age: '',
    });
  };

  return (
    <> 
      <Card className={styles.input}>
        <form onSubmit={userSubmitHandler}>
          <label htmlFor="username">이름</label>
          <input
            id="username"
            type="text"
            onChange={usernameChangeHandler}
            value={userValue.username}
          />
          <label htmlFor="age">나이</label>
          <input
            id="age"
            type="number"
            onChange={ageChangeHandler}
            value={userValue.age}
          />
          <Button type="submit">가입하기</Button>
        </form>
      </Card>
    </>
  );
};

export default AddUsers;

