import React from 'react';
import Expense from './Expense/Expense';
import './Expenses.css';

const Expenses = (props) => {
  return (
    <div className="expenses">
      {props.expenses.map((expense) => (
        <Expense key={expense.id} expense={expense} />
      ))}
    </div>
  );
};

export default Expenses;
