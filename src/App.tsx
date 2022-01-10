import { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import { Expense } from "./models/Expense";
import ExpenseService from "./services/ExpenseService";

function App() {
  const [expenses, setExpenses] = useState(ExpenseService.getExpenses());
  
  const addExpenseHandler = (expense: Expense) => {
    ExpenseService.updateExpenses(expense);
    setExpenses(ExpenseService.getExpenses());
  }

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expenses expenses={expenses}/>
    </div>
  );
}

export default App;
