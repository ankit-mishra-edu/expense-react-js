import React from 'react';
import Expense from './Expense/Expense';
import './Expenses.css';

const Expenses = (props) => {
  const moreThanThree = (
    <div className="more-than-three">There are more than 3 Items</div>
  );
  return (
    <div className="expenses">
      {props.expenses.length > 3 && moreThanThree}
      {props.expenses.map((expense) => (
        <Expense key={expense.id} expense={expense} />
      ))}
    </div>
  );
};

export default Expenses;
