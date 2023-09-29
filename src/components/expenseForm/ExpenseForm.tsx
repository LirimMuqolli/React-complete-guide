import React, { useState } from "react";
import "./newExpense.css";

const ExpenseForm = ({onSaveExpenseData,onCancel}: any) => {
  const [enteredTitle, setEnteredTitle] = useState<string>("");
  const [enteredAmount, setEnteredAmount] = useState<string>("");
  const [enteredDate, setEnteredDate] = useState<string>("");

  // const [userInput, setUserInput] = useState({
  //     enteredTitle: "",
  //     enteredAmount:"",
  //     enteredDate:""
  // })

  const titleChangeHandler = (event: any) => {
    setEnteredTitle(event.target.value);
  };
  const amountChangeHandler = (event: any) => {
    setEnteredAmount(event.target.value);
  };

  const dateChangeHandler = (event: any) => {
    setEnteredDate(event.target.value);
  };
  const submitHandler = (event: any) => {
    event.preventDefault();
    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };
    onSaveExpenseData(expenseData);
    setEnteredAmount("");
    setEnteredDate("");
    setEnteredTitle("");
  };
  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense_controls">
        <div className="new-expense-control">
          <label htmlFor="title" className="label_title">
            Title
          </label>
          <input
            type="text"
            id="title"
            value={enteredTitle}
            className="form-control"
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense-control_two">
          <label htmlFor="amount" className="label_title">
            Amount
          </label>
          <input
            type="number"
            id="amount"
            value={enteredAmount}
            min="0.01"
            step="0.01"
            className="form-control"
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense-control_three">
          <label htmlFor="date" className="label_title">
            Date
          </label>
          <input
            type="date"
            id="date"
            value={enteredDate}
            min="2019-01-01"
            max="2023-12-31"
            className="form-control"
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense_actions">
        <button type="button" onClick={onCancel} className="new-expense_button cancel">Cancel</button>
        <button  type="submit" className="new-expense_button">
          Add Expense
        </button>
      </div>
    </form>
  );
};

export default ExpenseForm;
