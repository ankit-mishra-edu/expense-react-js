import React from 'react';
import './style.css';

import Expenses from './components/Expenses/Expenses';
import ExpenseForm from './components/Expenses/Expense/ExpenseForm';

export default function App() {
  const onAddExpenseHandler = (expense) => {
    console.log('Expense in App.js');
    console.log(expense);
  };

  return (
    <div>
      {/* <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p> */}
      <ExpenseForm onAddExpense={onAddExpenseHandler} />
      <Expenses />
    </div>
  );
}
