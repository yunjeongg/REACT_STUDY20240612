import logo from "./logo.svg";
import "./App.css";
import React from "react";
import ExpenseList from "./components/expenses/ExpenseList";
import Greet from "./components/Greet";
import Counter from "./components/practice/Counter";
import NewExpense from "./components/new-expenses/NewExpense";
import CheckBoxStyle from "./components/practice/CheckBoxStyle";

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
      date: new Date(2023, 3 - 1, 18)
    }, 
    {
      title: '돈가스쩝쩝',
      price: 12000,
      date: new Date(2021, 1 - 1, 22)
    },
    {
      title: '파파피자',
      price: 40000,
      date: new Date(2022, 10 - 1, 2)
    },
    {
      title: '엄마손칼국수',
      price: 8000,
      date: new Date(2020, 12 - 1, 25)
    }
  ];

  // ExpenseForm 에게 내려보낼 함수
  // onAddExpense - onSave - onAdd 로 ExpenseForm.js 에 전달
  const onAddExpense = (userInput) => {
    // ExpenseForm - NewExpense - App 로 내려보냈던 함수 다시 받음
    // 함수 매개변수 자리에 받은 매개변수 입력
    console.log('App.js 가 내려보낸 함수 호출!');
    console.log(userInput);

    expenses.push(userInput);
    console.log(expenses);
  };

  return (
    <>
      <NewExpense onSave={onAddExpense} />
      <ExpenseList expenses={expenses} />
    </>
  );
};

export default App;
