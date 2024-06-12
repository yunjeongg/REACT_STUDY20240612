import logo from "./logo.svg";
import "./App.css";
import React from "react";
import ExpenseList from "./components/expenses/ExpenseList";

// Props
// 컴포넌트 간에 데이터를 전달하는 메커니즘
// 단방향데이터흐름을 지원하는데 부모 -> 자식 컴포넌트로 전달된다.
// 속성에 값을 넣어주고, componenet 함수의 파라미터로 받을 수 있다.
// 속성을 보낼 때 반드시 {} 를 붙여야 하지만 문자열만 생략가능
const App = () => {
  // 서버에서 지출항목 JSON 배열을 응답받았다고 가정했을 때
  const expenses = 
  [
    // 날씨의 달은 -1 해줘야 한다. 스크립트 자체문제
    {
      title: '국밥먹음',
      price: 10000,
      date: new Date(2024, 6 - 1, 3)
    }, 
    {
      title: '치킨찍찍',
      price: 35000,
      date: new Date(2024, 3 - 1, 18)
    }, 
    {
      title: '돈가스쩝쩝',
      price: 12000,
      date: new Date(2024, 1 - 1, 22)
    }
  ]
  return (
    <>
      <ExpenseList expenses={expenses} />
    </>
  );
};

export default App;
