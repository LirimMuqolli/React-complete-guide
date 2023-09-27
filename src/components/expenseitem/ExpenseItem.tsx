import React from 'react';
import './ExpenseItem.css'
import ExpenseDate from '../expenseDate/ExpenseDate';

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
  const formatDate = (date: Date) => {
    const options: Intl.DateTimeFormatOptions = {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    };
    return date.toLocaleDateString(undefined, options);
  };

  return (
    <div className='expense-item-container'>
      {expenseData.map((expense) => (
        <div key={expense.id} className='expense-item'>
          <ExpenseDate  date={expense.date} />
       
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
