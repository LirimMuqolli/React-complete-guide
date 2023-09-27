import React from 'react';
import './ExpenseItem.css'

interface ExpenseDataObjectProps {
  id: number;
  title: string;
  amount: number;
  date: any;
}

interface ExpenseData {
  expenseData: ExpenseDataObjectProps[];
}

const ExpenseItem: React.FC<ExpenseData> = ({ expenseData }) => {
  return (
    <div className='expense-item-container'>
      {expenseData.map((expense) => (
        <div key={expense.id} className='expense-item'>
          <div className='expense-date'>{expense.date.toDateString()}</div>
          <div className='expense-item_description'>
            <h2>{expense.title}</h2>
          </div>
          <div className='expense-item_price'><p className='expense-item-price-text'>${expense.amount}</p></div>
        </div>
      ))}
    </div>
  );
};

export default ExpenseItem;
