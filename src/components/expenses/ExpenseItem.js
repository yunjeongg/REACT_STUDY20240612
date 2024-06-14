import React, {useState} from "react";
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

const ExpenseItem = ({ date, title, price: exPrice }) => {

  // let itemTitle = title;

  // useState 는 컴포넌트의 상태값을 관리하며 이 상태값은 렌더링에 영향을 미친다.
  // useState훅의 리턴값은 배열이고,
  // - 첫번째 요소는 관리할 상태값의 초기값
  // - 두번째 요소는 해당 상태값을 변경할 때 사용하는 setter 함수이다.
  // const abc = React.useState(title);
  const abc = useState(title);
  //      관리할 값, 상태변경함수
  const [itemTitle, setItemTitle] = useState(title);
  console.log('abc', abc);

  // 원화 표기법으로 변환
  const formattedPrice = new Intl.NumberFormat("ko-KR").format(exPrice);

  // 1. 리액트에서 기본적으로 태그가 생성되어있지 않기 때문에 이런식으로는 특정태그를 잡아올 수 없다.
  // const $btn = document.getElementById("btn");
  // console.log('btn', $btn);

  // 2. 이벤트 핸들러 선언
  // 핸들러 안에서는 태그들이 다 생성되어 있는 상태이기 때문에 정상작동
  const clickHandler = e => {

    // const setTitle = abc[1];

    // useState 가 관리하는 상태값은 반드시 setter 로만 변경해야 한다.
    // 아래처럼 직접변경 불가!
    // abc[0] = '하하호호';

    // setTitle('하하호호123');

    setItemTitle('짜장면');
  };
  

  console.log('렌더링 전');

  // 3. 아래 버튼태그에 인라인속성 onClick={clickHandler} 달아준다. (호출아님)

  return (
    <Card className='expense-item'>
      <ExpenseDate exDate={date} />
      <div className='expense-item__description'>
        <h2>{itemTitle}</h2>
        <div className='expense-item__price'>{formattedPrice}원</div>
      </div>
    </Card>
  )
}


export default ExpenseItem;
