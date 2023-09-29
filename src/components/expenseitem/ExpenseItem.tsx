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

  return (
    <div className="expense-item-container">
      <ExpenseFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
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
          </div>
        </div>
      ))}
    </div>
  );
};

export default ExpenseItem;
