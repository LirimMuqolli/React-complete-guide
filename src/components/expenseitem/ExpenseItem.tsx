import React, { useState } from "react";
import "./ExpenseItem.css";
import ExpenseDate from "../expenseDate/ExpenseDate";
import ExpenseFilter from "../expenseFilter/ExpenseFilter";

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



  const [filteredYear,setFilteredYear] = useState('2020');
  const filterChangeHandler = (selectedYear:any) => {
    setFilteredYear(selectedYear)
  }
  const filterExpensesByYear = (expenses: ExpenseDataObjectProps[], year: string) => {
    return expenses.filter((expense) => {
      const expenseYear = expense.date.getFullYear().toString();
      return expenseYear === year;
    });
  };

  const filteredExpenses = filterExpensesByYear(expenseData, filteredYear);

  return (
    <div className="expense-item-container">
      <ExpenseFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
      {filteredExpenses.length === 0  && (<p className="no-expenses-found">No expenses found.</p>)}
      {filteredExpenses.length > 0 && filteredExpenses.map((expense) => (
        <div key={expense.id} className="expense-item">
          <ExpenseDate date={expense.date} />
          <div className="expense-item_description">
            <h2>{expense.title}</h2>
          </div>
          <div className="right_side">
            <div className="expense-item_price">
              <p className="expense-item-price-text">${expense.amount}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ExpenseItem;
