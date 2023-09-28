import React, { useState } from "react";
import "./ExpenseItem.css";
import ExpenseDate from "../expenseDate/ExpenseDate";

interface ExpenseDataObjectProps {
  id: number;
  title: string;
  amount: number;
  date: Date;
}

interface ExpenseData {
  expenseData: ExpenseDataObjectProps[];
}

const ExpenseItem: React.FC<ExpenseData> = ({ expenseData }) => {
  const [expenseDataa, setExpenseData] = useState(expenseData);

  const handleClick = (expenseId: number) => {
    // Create a copy of the expenseData array
    const updatedExpenses = [...expenseData];

    // Find the index of the expense with the given ID
    const expenseIndex = updatedExpenses.findIndex(
      (expense) => expense.id === expenseId
    );

    // Check if the expense with the given ID exists
    if (expenseIndex !== -1) {
      // Update the title for the specific expense
      updatedExpenses[expenseIndex].title = "updated";

      // Update the state with the updated expenseData
      setExpenseData(updatedExpenses);
    }
  };

  return (
    <div className="expense-item-container">
      {expenseData.map((expense) => (
        <div key={expense.id} className="expense-item">
          <ExpenseDate date={expense.date} />

          <div className="expense-item_description">
            <h2>{expense.title}</h2>
          </div>
          <div className="right_side">
            <div className="expense-item_price">
              <p className="expense-item-price-text">${expense.amount}</p>
            </div>
            <button
              className="change_title_button"
              onClick={() => handleClick(expense.id)}
            >
              Change Title
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ExpenseItem;
