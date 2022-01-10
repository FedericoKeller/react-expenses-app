import { FC } from "react";
import { FilteredExpensesProps } from "../../../../models/props.interface";
import ExpenseItem from "../../ExpenseItem/ExpenseItem";
import './ExpensesList.css';

const ExpensesList: FC<FilteredExpensesProps> = (props) => {
   
    if (props.filteredExpenses.length === 0) {
       return <h2 className="expenses-list__fallback">No expenses found.</h2>
    }
    
    return (
        <ul className="expenses-list">
            {props.filteredExpenses.map((expense) => <ExpenseItem key={expense.id} expenseItem={expense} />)}
        </ul>
    )
}

export default ExpensesList;
