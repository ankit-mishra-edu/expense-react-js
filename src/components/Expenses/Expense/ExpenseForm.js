import React, { useState } from 'react';
import './ExpenseForm.css';

import FormControl from './FormControl';

const ExpenseForm = (props) => {
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');
  const [dateTime, setDateTime] = useState('');

  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  const onSubmitFormHandler = (event) => {
    event.preventDefault();

    setIsFormSubmitted(true);

    if (!title || !price || !dateTime) {
      return;
    }

    const expense = {
      title: title,
      price: price,
      dateTime: dateTime,
    };

    props.onAddExpense(expense);

    // // Reset form value
    // setTitle('');
    // setPrice('');
    // setDateTime('');
  };

  return (
    <form onSubmit={onSubmitFormHandler}>
      <legend>{props.children}</legend>
      <div className="expense_form">
        <FormControl
          type="text"
          label="Title"
          onInputValueChange={setTitle}
          isFormSubmitted={isFormSubmitted}
        />
        <FormControl
          type="number"
          label="Price"
          onInputValueChange={setPrice}
          isFormSubmitted={isFormSubmitted}
        />
        <FormControl
          type="date"
          label="Date of Expense"
          onInputValueChange={setDateTime}
          isFormSubmitted={isFormSubmitted}
        />
        <div className="expense_form__item">
          <button type="submit" className="expense_form__submit_button">
            Add Expense
          </button>
        </div>
      </div>
    </form>
  );
};
export default ExpenseForm;

// import React, { useState } from 'react';
// import './ExpenseForm.css';

// const ExpenseForm = (props) => {
//   const [title, setTitle] = useState('');
//   const [price, setPrice] = useState('');
//   const [dateTime, setDateTime] = useState('');

//   let [isInputValid, setisInputvalid] = useState(true);

//   const onChangeTitleHandler = (event) => {
//     setTitle(event.target.value);
//   };

//   const onChangePriceHandler = (event) => {
//     setPrice(event.target.value);
//   };

//   const onChangeDateTimeHandler = (event) => {
//     setDateTime(event.target.value);
//   };

//   const onSubmitFormHandler = (event) => {
//     event.preventDefault();

//     if (title.trim().length === 0) {
//       setisInputvalid(false);
//       return;
//     }

//     const expense = {
//       title: title,
//       price: price,
//       dateTime: dateTime,
//     };
//     console.log(expense);
//     props.onAddExpense(expense);

//     // Reset form value
//     setTitle('');
//     setPrice('');
//     setDateTime('');
//   };

//   return (
//     <form onSubmit={onSubmitFormHandler}>
//       <legend>{props.children}</legend>
//       <div className="expense_form">
//         <div className={`expense_form__item ${isInputValid ? '' : 'invalid'}`}>
//           <label className="expense_form__label">Title: </label>
//           <input
//             type="text"
//             value={title}
//             className="expense_form__input"
//             onChange={onChangeTitleHandler}
//           />
//         </div>
//         <div className={`expense_form__item ${isInputValid ? '' : 'invalid'}`}>
//           <label className="expense_form__label">Price: </label>
//           <input
//             type="number"
//             value={price}
//             className="expense_form__input"
//             onChange={onChangePriceHandler}
//           />
//         </div>
//         <div className={`expense_form__item ${isInputValid ? '' : 'invalid'}`}>
//           <label className="expense_form__label">DateTime: </label>
//           <input
//             type="date"
//             value={dateTime}
//             className="expense_form__input"
//             onChange={onChangeDateTimeHandler}
//           />
//         </div>
//         <div className="expense_form__item">
//           <button type="submit" className="expense_form__submit_button">
//             Add Expense
//           </button>
//         </div>
//       </div>
//     </form>
//   );
// };
// export default ExpenseForm;
