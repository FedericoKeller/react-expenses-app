import ExpenseDisplay from "./components/Expenses/ExpenseDisplay/ExpenseDisplay";
import NewExpense from "./components/NewExpense/NewExpense";
import { Expense } from "./models/expenses.interface";
import ExpenseService from "./services/expenses.service";

function App() {

  const addExpenseHandler = (expense: Expense) => {
    console.log('On App.js')
    ExpenseService.updateExpenses(expense);
    console.log(ExpenseService.getExpenses())
  }

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}/>
      <ExpenseDisplay />
    </div>
  );
}

export default App;
