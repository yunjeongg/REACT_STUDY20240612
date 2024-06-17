import React, { useState } from 'react';
import './CourseInput.css';
import Button from '../UI/Button';

const CourseInput = ({ onAdd }) => {

  // 나의 목표 <input>태그에 입력한 값
  const [enteredText, setEnteredText] = useState('');

  // 입력값 검증을 통과했는지 여부를 상태관리
  const [isValid, setIsValid] = useState(true); // 처음은 유효

  const formSubmitHandler = e => {
    e.preventDefault();

    if(enteredText.trim().length === 0) { // <input>태그에 입력한 값 이 0인경우
      setIsValid(false); // 유효하지않음. (제출불가)
      return;
    }
    const newGoalObject = 
    {
      id: Math.random().toString(),
      text: enteredText
    };

    // console.log(newGoalObject);

    // 더미데이터에 입력추가한 데이터를 추가하기 
    onAdd(newGoalObject);

    // 추가 후 창 비워주기
    setEnteredText('');
  };

  console.log();

  const goalChangeHandler = e => {
    const inputValue = e.target.value;

    // 입력값 검증
    if (inputValue.trim().length > 0) { // <input> 태그 입력값에 좌우공백제거하고 그 길이가 0보다 클 경우
      setIsValid(true); // 유효하다. (제출가능)

    }
    setEnteredText(e.target.value)};
  return (
    <form onSubmit={formSubmitHandler}>
      <div className="form-control">
        <label>나의 목표</label>
        <input type="text" 
          onChange={goalChangeHandler} 
          value={enteredText} 
          // 바깥 {} 는 문법, 안쪽 {} 는 객체를 의미
          style={{backgroundColor: isValid ? 'transparent' : 'salmon',  // 유효할 경우 투명, 아니면 연어색
                  borderColor: isValid ? 'black' : 'red'}}
        />
      </div>
      <Button type="submit">목표 추가하기</Button>
    </form>
  );
};

export default CourseInput;