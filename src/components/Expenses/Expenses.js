import React from 'react';
import Expense from './Expense/Expense';
import './Expenses.css';

const Expenses = () => {
  const expenses = [
    { title: 'Expense - 1', price: 1, dateTime: new Date() },
    { title: 'Expense - 2', price: 2, dateTime: new Date() },
    { title: 'Expense - 3', price: 3, dateTime: new Date() },
  ];
  return (
    <div className="expenses">
      {expenses.map((expense) => (
        <Expense expense={expense} />
      ))}
    </div>
  );
};

export default Expenses;
