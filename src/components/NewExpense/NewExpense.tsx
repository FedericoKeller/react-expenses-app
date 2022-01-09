import { FC } from "react";
import ExpenseForm from "./ExpenseForm/ExpenseForm";
import './NewExpense.css';

const NewExpense: FC<{}> = (props) => {
    return (
        <div className="new-expense">
            <ExpenseForm />
        </div>
    )
}

export default NewExpense;