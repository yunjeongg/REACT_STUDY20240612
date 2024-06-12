import logo from './logo.svg';
import './App.css';
import React from 'react'
import ExpenseItem from './components/expenses/ExpenseItem';

// Props 
// 컴포넌트 간에 데이터를 전달하는 메커니즘
// 단방향데이터흐름을 지원하는데 부모 -> 자식 컴포넌트로 전달된다.
// 속성에 값을 넣어주고, componenet 함수의 파라미터로 받을 수 있다.
// 속성을 보낼 때 반드시 {} 를 붙여야 하지만 문자열만 생략가능
const App = () => {
  return (
    <>
    <ExpenseItem title="국밥먹음" price={8000} date={new Date(2024, 6, 3)}/>
    <ExpenseItem title="치킨배달" price={30000} date={new Date(2024, 1, 18)}/>
    <ExpenseItem title="돈가스냠냠" price={10000} date={new Date(2024, 3, 23)}/>
    </>
  )
}

export default App