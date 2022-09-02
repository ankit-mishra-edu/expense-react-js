import React from 'react';
import Expense from './Expense/Expense';

const Expenses = () => {
  const expenses = [
    { title: 'Expense - 1', price: 1, dateTime: new Date() },
    { title: 'Expense - 2', price: 2, dateTime: new Date() },
    { title: 'Expense - 3', price: 3, dateTime: new Date() },
  ];
  return (
    <div>
      <Expense expense={expenses[0]} />
      <Expense expense={expenses[1]} />
      <Expense expense={expenses[2]} />
    </div>
  );
};

export default Expenses;
