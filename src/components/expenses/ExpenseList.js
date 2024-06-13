import React from 'react';
import ExpenseItem from './ExpenseItem';
import ExpenseFilter from './ExpenseFilter';

const ExpenseList = ({ expenses }) => {
  // 분할해온 이후 코드는 expenses 를 알 수 없기 때문에 props 해와야 한다.
  
  const onFilterChange = (filteredYear) => {
    // ExpenseFilter 에 있는 선택된 연도값을 여기서 출력하기
    console.log('ExpenseList:', filteredYear);
  }

  // 태그 속성이 on~ 인 경우 함수를 내려보낸다고 이해하면 된다.
  return (
    <div className="expenses">

      <ExpenseFilter onChangeFilter={onFilterChange} />

      <ExpenseItem
        title={expenses[0].title}
        price={expenses[0].price}
        date={expenses[0].date}
      />
      <ExpenseItem
        title={expenses[1].title}
        price={expenses[1].price}
        date={expenses[1].date}
      />
      <ExpenseItem
        title={expenses[2].title}
        price={expenses[2].price}
        date={expenses[2].date}
      />
    </div>
  );
};

export default ExpenseList;
