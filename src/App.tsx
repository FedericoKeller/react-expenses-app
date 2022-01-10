import { useState } from "react";
import ExpenseDisplay from "./components/Expenses/ExpenseDisplay/ExpenseDisplay";
import NewExpense from "./components/NewExpense/NewExpense";
import { Expense } from "./models/expenses.interface";
import ExpenseService from "./services/expenses.service";

function App() {
  const [expenses, setExpenses] = useState(ExpenseService.getExpenses());

  console.log(expenses)

  const addExpenseHandler = (expense: Expense) => {
    ExpenseService.updateExpenses(expense);
    setExpenses(ExpenseService.getExpenses());
  }

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}/>
      <ExpenseDisplay expenses={expenses}/>
    </div>
  );
}

export default App;
