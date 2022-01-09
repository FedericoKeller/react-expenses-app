import { FC } from "react";
import { Expense, ExpenseFormData, NewExpenseProps } from "../../models/expenses.interface";
import ExpenseForm from "./ExpenseForm/ExpenseForm";
import './NewExpense.css';

const NewExpense: FC<NewExpenseProps> = (props) => {

    const saveExpenseDataHandler = (enteredExpenseData: ExpenseFormData) => {
        const expenseData: Expense = {
            id: Math.random().toString(),
            ...enteredExpenseData
        }

        props.onAddExpense(expenseData)
    }

    return (
        <div className="new-expense">
            <ExpenseForm onSaveExpenseData={saveExpenseDataHandler}/>
        </div>
    )
}

export default NewExpense;