import React from "react";
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";

// Props
// 파라미터로 받을 때 두 가지 방법이 있다.
// 1.
// const ExpenseItem = (aaa) => {

// 2. aaa. 안붙이고싶을 때
const ExpenseItem = ({ date, title, price: exPrice }) => {
  // console.log('props: ', aaa);

  // 변수 선언
  // const expenseDate = aaa.date;
  // const expenseTitle = aaa.title;
  // const expensePrice = aaa.price;

  // 함수 선언

  // 1자리 숫자를 2자리수로 변환하는 함수
  const make2digit = (text) => {
    return text.toString().padStart(2, "0");
  };

  const makeFormattedDate = () => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const day = date.getDate();

    return `${year}년 ${make2digit(month)}월 ${make2digit(day)}일`;
  };

  // 원화 표기법으로 변환
  const formattedPrice = new Intl.NumberFormat("ko-KR").format(exPrice);

  // 아래 <ExpenseDate exDate={date} />
  // date 를 exDate 이름으로 ExpenseDate.js 에 전달하겠다는 뜻.
  
  return (
    <div className="expense-item">
      <ExpenseDate exDate={date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">{formattedPrice}원</div>
      </div>
    </div>
  );
};

export default ExpenseItem;
