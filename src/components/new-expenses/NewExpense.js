import React, { useState } from 'react';
import './NewExpense.css';
import ExpenseForm from './ExpenseForm';

const NewExpense = ({ onSave }) => {

  // 1. toggle 값 원래는 false
  const [toggle, setToggle] = useState(false);

  // 2. 버튼클릭이벤트시 true 
  const startInsertModeHandler = () => setToggle(true);

  // 3. cancel 버튼 눌렀을 때 다시 false 로 돌아가는 함수
  const stopInsertModeHandler = () => setToggle(false);

  let newExpenseContent = <button onClick={startInsertModeHandler}>새로운 지출 추가하기</button>;
  
  if (toggle) newExpenseContent = <ExpenseForm onAdd={onSave} onCancel={stopInsertModeHandler} />;

  return (
    <div className="new-expense">
        {newExpenseContent}
    </div>
  );
};

export default NewExpense;

