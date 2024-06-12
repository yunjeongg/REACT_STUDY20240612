import React from 'react';
import './ExpenseDate.css';

const ExpenseDate = ({ exDate: date}) => {
  return (
    <div className="expense-date">
      <div className="expense-date__month">{date.getFullYear()}</div>
      <div className="expense-date__year">{date.toLocaleString('en-US', {month: 'long'})}</div>
      <div className="expense-date__day">{date.getDate()}</div>
    </div>
  )
}

export default ExpenseDate;
