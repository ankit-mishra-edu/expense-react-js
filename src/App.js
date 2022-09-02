import React, { useState } from 'react';
import './style.css';

import Expenses from './components/Expenses/Expenses';
import ExpenseForm from './components/Expenses/Expense/ExpenseForm';

export default function App() {
  const initialExpenses = [
    { id: 1, title: 'Expense - 1', price: 1, dateTime: new Date() },
    { id: 2, title: 'Expense - 2', price: 2, dateTime: new Date() },
    { id: 3, title: 'Expense - 3', price: 3, dateTime: new Date() },
  ];

  const [expenses, setExpenses] = useState(initialExpenses);

  const onAddExpenseHandler = (expense) => {
    expense.id = expenses.length + 1;
    setExpenses((previousExpenses) => [expense, ...previousExpenses]);
  };

  return (
    <div>
      <ExpenseForm onAddExpense={onAddExpenseHandler} />
      <Expenses expenses={expenses} />
    </div>
  );
}
