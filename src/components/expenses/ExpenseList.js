import React, { useState } from 'react';
import ExpenseItem from './ExpenseItem';
import ExpenseFilter from './ExpenseFilter';

const ExpenseList = ({ expenses }) => {

  // 연도가 다른 데이터에 영향을 미치려면 useState를 사용해야 한다.
  const [filteredYear, setFilteredYear] 
          = useState(new Date().getFullYear().toString());
  
  const onFilterChange = (filteredYear) => {
    // ExpenseFilter 에 있는 선택된 연도값을 여기서 출력하기
    console.log('ExpenseList:', filteredYear);

    // setter
    setFilteredYear(filteredYear);

  }

  // 태그 속성이 on~ 인 경우 함수를 내려보낸다고 이해하면 된다.

  // 배열에 태그를 넣으면 렌더링된다.
  // {[ <h1>하하호호</h1>, <h2>룰루라라</h2> ]}
  // App.js에서 받은 expenses 배열을 <ExpenseItem> 배열로 변환하는 함수
  // const convertToComponentArray = () => {
  //   return expenses
  //         .map(ex => <ExpenseItem title={ex.title} price={ex.price} date={ex.date} />);
  // };

  // map을 사용해 동적렌더링하는 경우 React 는 각 항목을 구별하지 않기 때문에
  // 구별할 수 있도록 key 값을 넣어줘야 한다. 보통은 각 테이블의 pk를 key값으로 넣어준다.
  // key={Math.random().toString()} 지금은 없으니 다른방법으로 구현

  return (
    <div className="expenses">
      <ExpenseFilter onChangeFilter={onFilterChange} />

      {expenses
        .filter(ex => ex.date.getFullYear().toString() === filteredYear)
        .map(({ title, price, date }) => (
        <ExpenseItem
          key={Math.random().toString()}
          title={title}
          price={price}
          date={date}
        />
      ))}
    </div>
  );
};

export default ExpenseList;