import React, { useState } from 'react';
import './FormInput.css';

const FormInput = (props) => {
  const [inputValue, setInputValue] = useState('');

  const onInputValueChangeHandler = (event) => {
    setInputValue(event.target.value.trim());
    props.onInputValueChange(event.target.value);
  };

  return (
    <div
      className={`expense_form__item ${
        props.isFormSubmitted && inputValue.length === 0 ? 'invalid' : ''
      }`}
    >
      <label className="expense_form__label">{props.label}: </label>
      <input
        type={props.type}
        value={inputValue}
        className="expense_form__input"
        onChange={onInputValueChangeHandler}
      />
    </div>
  );
};

export default FormInput;
