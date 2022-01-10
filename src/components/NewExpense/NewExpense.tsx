import { FC, useState } from "react";
import { Expense, ExpenseFormData } from "../../models/Expense";
import { NewExpenseProps } from "../../models/Props";
import Button from "../UI/Button/Button";
import ExpenseForm from "./ExpenseForm/ExpenseForm";
import './NewExpense.css';

const NewExpense: FC<NewExpenseProps> = (props) => {
    const [isEditing, setIsEditing] = useState(false);

    const saveExpenseDataHandler = (enteredExpenseData: ExpenseFormData) => {
        const expenseData: Expense = {
            id: Math.random().toString(),
            ...enteredExpenseData
        }

        props.onAddExpense(expenseData)
        setIsEditing(false);
    }

    const showExpenseFormHandler = () => {
        setIsEditing(true);
    }

    const cancelExpenseFormHandler = () => {
        setIsEditing(false);
    }

    return (
        <div className="new-expense">
            {!isEditing && <Button onClickEvent={showExpenseFormHandler} type="button">Add new Expense</Button>}
            {isEditing && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={cancelExpenseFormHandler}/>}
        </div>
    )
}

export default NewExpense;