import React from "react";
import './newExpense.css'

const ExpenseForm = () => {
  return (
    <form>
      <div className="new-expense_controls">
        <div className="new-expense-control">
          <label htmlFor="title" className="label_title">Title</label>
          <input type="text" id="title" className="form-control" />
        </div>
        <div className="new-expense-control_two">
          <label htmlFor="amount"  className="label_title">Amount</label>
          <input type="number" id="amount" min="0.01" step="0.01" className="form-control" />
        </div>
        <div className="new-expense-control_three">
          <label htmlFor="date"  className="label_title">Date</label>
          <input type="date" id="date" min="2022-01-01" max="2023-12-31" className="form-control" />
        </div>
      </div>
      <div className="new-expense_actions">
        <button type="submit" className="new-expense_button">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
