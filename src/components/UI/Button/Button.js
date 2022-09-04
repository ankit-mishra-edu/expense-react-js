import React from 'react';
import './Button.css';

const Button = (props) => {
  return (
    <div className="form-group">
      <button type="submit" className="btn">
        Add Expense
      </button>
    </div>
  );
};

export default Button;
