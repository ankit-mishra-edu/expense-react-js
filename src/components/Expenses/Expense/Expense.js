import React from 'react';
import './Expense.css';

const Expense = (props) => {
  return (
    <div className="expense">
      <div className="expense__item">{props.expense.title}</div>
      <div className="expense__item">{props.expense.price}</div>
      <div className="expense__item">
        {props.expense.dateTime.getDay()} {props.expense.dateTime.getMonth()}{' '}
        {props.expense.dateTime.getFullYear()}
      </div>
    </div>
  );
};

export default Expense;
