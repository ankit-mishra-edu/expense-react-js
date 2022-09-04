import React, { useState } from 'react';
import './FormControl.css';

const FormControl = (props) => {
  const [inputValue, setInputValue] = useState('');

  const onInputValueChangeHandler = (event) => {
    setInputValue(event.target.value.trim());
    props.onInputValueChange(event.target.value);
  };

  return (
    <div
      className={`form-group ${
        props.isFormSubmitted && inputValue.length === 0 ? 'invalid' : ''
      }`}
    >
      <label className="form-label">{props.label}: </label>
      <input
        type={props.type}
        value={inputValue}
        className="form-control"
        onChange={onInputValueChangeHandler}
      />
    </div>
  );
};

export default FormControl;
