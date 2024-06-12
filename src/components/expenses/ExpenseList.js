import React from 'react';
import ExpenseItem from './ExpenseItem';

const ExpenseList = ({ expenses }) => {
  // 분할해온 이후 코드는 expenses 를 알 수 없기 때문에 props 해와야 한다.
  return (
    <div className="expenses">
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
