import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");
  //   const [enteredInput, setEnteredInput] = useState({
  //     title: "",
  //     amount: "",
  //     date: "",
  //   });
  const enteredTitle = (e) => {
    setTitle(e.target.value);
    // setEnteredInput({
    //   ...enteredInput,
    //   title: e.target.value,
    // });
    // setEnteredInput((prevState) => {
    //   return { ...prevState, title: e.target.value };
    // });
  };

  const enteredAmount = (e) => {
    setAmount(e.target.value);
    // setEnteredInput({
    //   ...enteredInput,
    //   amount: e.target.value,
    // });
    // setEnteredInput((prevState) => {
    //   return { ...prevState, amount: e.target.value };
    // });
  };

  const enteredDate = (e) => {
    setDate(e.target.value);
    // setEnteredInput({
    //   ...enteredInput,
    //   date: e.target.value,
    // });
    // setEnteredInput((prevState) => {
    //   return { ...prevState, date: e.target.value };
    // });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const expenseData = {
      title: title,
      amount: +amount,
      date: new Date(date),
    };
    props.onSaveExpenseData(expenseData);
    setTitle("");
    setAmount("");
    setDate("");
    // setEnteredInput({
    //   title: "",
    //   amount: "",
    //   date: "",
    // });
    // console.log(enteredInput);
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" value={title} onChange={enteredTitle} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            value={amount}
            onChange={enteredAmount}
            min="0.01"
            step="0.01"
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            value={date}
            onChange={enteredDate}
            min="2000-01-01"
            max="2022-12-31"
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
