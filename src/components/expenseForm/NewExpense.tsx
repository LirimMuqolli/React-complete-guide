import React from "react";
import ExpenseForm from "./ExpenseForm";
import "./newExpense.css";

const NewExpense = ({onAddExpense}: any) => {
  const saveExpenseDataHandler = (enteredExpenseData: any) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    onAddExpense(expenseData)
    
  };
  return (
    <div className="new-expense_container">
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
    </div>
  );
};

export default NewExpense;
