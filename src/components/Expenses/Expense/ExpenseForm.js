import React, { useState } from 'react';
import './ExpenseForm.css';

const ExpenseForm = (props) => {
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');
  const [dateTime, setDateTime] = useState('');

  const onChangeTitleHandler = (event) => {
    setTitle(event.target.value);
  };

  const onChangePriceHandler = (event) => {
    setPrice(event.target.value);
  };

  const onChangeDateTimeHandler = (event) => {
    setDateTime(event.target.value);
  };

  const onSubmitFormHandler = (event) => {
    event.preventDefault();

    const expense = {
      title: title,
      price: price,
      dateTime: dateTime,
    };
    console.log(expense);
    props.onAddExpense(expense);

    // Reset form value
    setTitle('');
    setPrice('');
    setDateTime('');
  };

  return (
    <form onSubmit={onSubmitFormHandler}>
      <legend>{props.children}</legend>
      <div className="expense_form">
        <div className="expense_form__item">
          <label className="expense_form__label">Title: </label>
          <input
            type="text"
            value={title}
            className="expense_form__input"
            onChange={onChangeTitleHandler}
          />
        </div>
        <div className="expense_form__item">
          <label className="expense_form__label">Price: </label>
          <input
            type="number"
            value={price}
            className="expense_form__input"
            onChange={onChangePriceHandler}
          />
        </div>
        <div className="expense_form__item">
          <label className="expense_form__label">DateTime: </label>
          <input
            type="date"
            value={dateTime}
            className="expense_form__input"
            onChange={onChangeDateTimeHandler}
          />
        </div>
        <div className="expense_form__item">
          <button type="submit">Add Expense</button>
        </div>
      </div>
    </form>
  );
};
export default ExpenseForm;
