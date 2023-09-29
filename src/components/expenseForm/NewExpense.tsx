import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./newExpense.css";

const NewExpense = ({onAddExpense}: any) => {
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const saveExpenseDataHandler = (enteredExpenseData: any) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    onAddExpense(expenseData)
    setIsEditing(false)
  };
  const startEditingHandler = () => {
    setIsEditing(true);
  }

  const stopEditingHandler = () => {
    setIsEditing(false)
  }
   return (
    <div className="new-expense_container">
      {!isEditing && <button onClick={startEditingHandler} className="new-expense_button center">Add New Expense</button>}
      {isEditing && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={stopEditingHandler} />}
    </div>
  );
};

export default NewExpense;
