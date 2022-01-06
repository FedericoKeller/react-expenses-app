import { FC } from "react";
import { Expense } from "../../models/expenses.interface";
import ExpenseService from "../../services/expenses.service";
import Card from "../Card/Card";
import ExpenseItem from "../ExpenseItem/ExpenseItem";
import './ExpenseDisplay.css';

const ExpenseDisplay: FC<{}> = () => {
    const expenses: Expense[] = ExpenseService.getExpenses();

  
    return (
        <Card className="expenses">
            {
                expenses.map((expense, index) => <ExpenseItem key={index} expenseItem={expense} />)
            }
        </Card>
    )
}

export default ExpenseDisplay;