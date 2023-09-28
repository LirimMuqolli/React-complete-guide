
import './App.css';
import ExpenseItem from  "./components/expenseitem/ExpenseItem";
import expenseData from "./components/expenseData/expenseData"
import NewExpense  from "./components/expenseForm/NewExpense"


function App() {


  return (
    <div className='App'>
      <h2>Let`s get started!</h2>
      <NewExpense />
      <ExpenseItem expenseData={expenseData} />

    </div>
  );
}

export default App;
