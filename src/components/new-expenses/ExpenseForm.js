import React, { useState } from 'react';
import './ExpenseForm.css';

const ExpenseForm = ({ onAdd }) => {

  // 오늘 날짜를 YYYY-MM-DD 형식으로 가져오는 함수
  const getTodayDate = () => {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0'); // 월은 0부터 시작하므로 1을 더해줌
    const day = String(today.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  }

    // 지출 내역 객체를 생성
    // 값이 들어있는 input 값을 변수로 잡고 그 값을 넣어 줄 수 있지만 바닐라자바스크립트의 방식이기에
    // 리액트의 방식인 입력칸에 있는 3개의 값을 각각의 상태값으로 관리
    // const [title, setTitle] = useState('');
    // const [price, setPrice] = useState(0);
    // const [date, setDate] = useState(null);

    // 입력칸에 있는 3개의 값을 하나의 상태값으로 관리
    const [userInput, setUserInput] = useState({
      title: '',
      price: '',
      date: ''
    });

    // 제목이 입력되었을 때 발생하는 이벤트 핸들러
  const titleChangeHandler = e => {
    // console.log(e.target.value);

    // setUserInput(e.target.value);
    // useState의 setter 은 상태변경까지 감지하는 로직이 있기에 위 코드를 아래처럼 사용하는 것은 안된다.
    // userInput.title = e.target.value; // (x)

    // 객체나 배열상태로 관리되는 상태값은 
    // 상태변경시 새로운 객체나 배열을 setter에 전달해야 함

    // setUserInput({
    //   ... userInput, // 기존 객체 복사하고
    //   title: e.target.value // 변경만 덮어씌우기
    // });

    // 만약 여러개의 setUserInput 을 걸 경우 비동기라서 적용순서를 장담할 수 없기 때문에
    // ex) 제목바꾸는 도중 가격이 바꿔버리는 등등

    // 해결방법 setUserInput 안에 함수를 한번 더 걸어 이전상태를 인자로 받는 함수를 전달받기
    // 이렇게 하면 업데이트끼리 서로 간섭하는 것을 방지할 수 있다.
    setUserInput(prevUserInput => ({
      ...prevUserInput,
      title: e.target.value
    }));
  };


  // 가격이 입력되었을 때 발생하는 이벤트 핸들러
  const priceChangeHandler = e => { // 사용법 2
    setUserInput({
      ... userInput,
      price: e.target.value,
    });
  }

  // 날짜이 입력되었을 때 발생하는 이벤트 핸들러
  const dateChangeHandler = e => { // 사용법 1
    setUserInput({
      title: userInput.title,
      price: userInput.price,
      date: e.target.value
    });
  };

  // 폼 전송 이벤트 핸들러 
  const submitHandler = e => {
    e.preventDefault(); // 폼 전송 방지
    console.log('폼이 전송됨');

    // const NewExpense = 
    // {
    //   title,
    //   price,
    //   date
    // };

    console.log(userInput);

    // App.js에게 받은 함수를 호출
    // 매개변수자리에 userInput 를 넣어 App.js에 다시 보내기
    onAdd(userInput);

    // form input 비우기
    setUserInput ({
      title: '',
      price: '',
      date: ''
    });
  }

  // <button type="submit"> 타입이 submit 인 경우
  // form 에 이벤트를 걸 수 있다. (onSubmit, onclick 등)

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" onChange={titleChangeHandler} value={userInput.title} />
        </div>
        <div className="new-expense__control">
          <label>Price</label>
          <input
            type="number"
            min="100"
            step="100"
            onChange={priceChangeHandler}
            value={userInput.price}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max={getTodayDate()}
            onChange={dateChangeHandler}
            value={userInput.date}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
