import React from "react";
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

const ExpenseItem = ({ date, title, price: exPrice }) => {

  // 원화 표기법으로 변환
  const formattedPrice = new Intl.NumberFormat("ko-KR").format(exPrice);

  // 1. 리액트에서 기본적으로 태그가 생성되어있지 않기 때문에 이런식으로는 특정태그를 잡아올 수 없다.
  // const $btn = document.getElementById("btn");
  // console.log('btn', $btn);

  // 2. 이벤트 핸들러 선언
  // 핸들러 안에서는 태그들이 다 생성되어 있는 상태이기 때문에 정상작동
  const clickHandler = e => {
    console.log("클릭클릭");
    console.log(e.target.previousElementSibling.firstElementChild.textContent);
  }

  // 3. 아래 버튼태그에 인라인속성 onClick={clickHandler} 달아준다. (호출아님)

  return (
      <Card className="expense-item">
      <ExpenseDate exDate={date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">{formattedPrice}원</div>
      </div>
      <button id="btn" onClick={clickHandler}>버튼</button>
      <button id="btn2" onMouseOver={e => alert('하하')}>버튼2</button>

    </Card>
  );
};

export default ExpenseItem;
