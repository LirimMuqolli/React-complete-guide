import React from "react";
import ExpenseForm from "./ExpenseForm";
import './newExpense.css'

const NewExpense = () => {
  return (
    <div className="new-expense_container">
      <ExpenseForm />
    </div>
  );
};

export default NewExpense;
