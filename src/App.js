
import './App.css';
import ExpenseItem from  "./components/expenseitem/ExpenseItem";
import expenseData from "./components/expenseData/expenseData"


function App() {


  return (
    <div className='App'>
      <h2>Let`s get started!</h2>
      <ExpenseItem expenseData={expenseData} />

    </div>
  );
}

export default App;
