import { FC } from "react";
import { Expense } from "../../models/expenses.interface";
import ExpenseService from "../../services/expenses.service";
import ExpenseItem from "../ExpenseItem/ExpenseItem";
import './ExpenseDisplay.css';

const ExpenseDisplay: FC<any> = () => {
    const expenses: Expense[] = ExpenseService.getExpenses();

  
    return (
        <div className="expenses">
            {
                expenses.map((expense, index) => <ExpenseItem key={index} expenseItem={expense} />)
            }
        </div>
    )
}

export default ExpenseDisplay;