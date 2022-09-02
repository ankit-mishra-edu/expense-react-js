import React from 'react';
import './Expense.css';

const Expense = (props) => {
  return (
    <div className="expense">
      <div className="expense__item">{props.expense.id}</div>
      <div className="expense__item">{props.expense.title}</div>
      <div className="expense__item">{props.expense.price}</div>
      <div className="expense__item">
        {new Date(props.expense.dateTime).toLocaleString()}
      </div>
    </div>
  );
};

export default Expense;
