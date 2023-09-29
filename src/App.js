import "./App.css";
import ExpenseItem from "./components/expenseitem/ExpenseItem";
import expenseData from "./components/expenseData/expenseData";
import NewExpense from "./components/expenseForm/NewExpense";
import { useState } from "react";

function App() {
  const [expenses, setExpenses] = useState(expenseData);
  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return  [...prevExpenses,expense];
    });
  };
  return (
    <div className="App">
      <h2>Let`s get started!</h2>
      <NewExpense onAddExpense={addExpenseHandler} />
      <ExpenseItem expenseData={expenses} />
    </div>
  );
}

export default App;
