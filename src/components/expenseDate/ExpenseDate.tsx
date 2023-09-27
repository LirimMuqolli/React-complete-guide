import React from 'react'

  interface expenseDateProps {
    date:Date;
  }

const ExpenseDate = ({ date }: expenseDateProps) => {
    const formatDate = (date: Date) => {
      const options: Intl.DateTimeFormatOptions = {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      };
      return date.toLocaleDateString(undefined, options);
    };
  
    return <div className='expense-date'>{formatDate(date)}</div>;
  };
  

export default ExpenseDate