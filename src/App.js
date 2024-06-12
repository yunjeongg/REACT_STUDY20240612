import logo from "./logo.svg";
import "./App.css";
import React from "react";
import ExpenseList from "./components/expenses/ExpenseList";
import Greet from "./components/Greet";

// Props Children
// 적용할 컴포넌트 태그들의 오프닝, 클로징태그로 children 태그를 넣어주고, 
// 속성과 값을 넣어주면
// children 태그 컴포넌트에서 파라미터로 받아주면 접근할 수 있다.

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
