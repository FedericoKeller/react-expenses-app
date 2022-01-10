import { ChangeEvent, FC, SyntheticEvent, useState } from "react";
import { ExpenseFormData } from "../../../models/expenses.interface";
import { ExpenseFormProps } from "../../../models/props.interface";
import './ExpenseForm.css';

const ExpenseForm: FC<ExpenseFormProps> = (props) => {
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState(0.01);
    const [enteredDate, setEnteredDate] = useState('');


    const titleChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setEnteredTitle(event.target.value);
    }

    const amountChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setEnteredAmount(Number.parseFloat(event.target.value));
    }

    const dateChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setEnteredDate(event.target.value);
    }

    const submitHandler = (event: SyntheticEvent<HTMLFormElement>) => {
        event.preventDefault();

        const expenseData: ExpenseFormData = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate)
        }

        props.onSaveExpenseData(expenseData);

        setEnteredTitle('');
        setEnteredAmount(0.01);
        setEnteredDate('');
    }

    return (
       <form onSubmit={submitHandler}>
           <div className="new-expense__controls">
               <div className="new-expense__control">
                   <label htmlFor="title">Title</label>
                   <input type="text" id="title" value={enteredTitle} onChange={titleChangeHandler}/>
               </div>
               <div className="new-expense__control">
                   <label htmlFor="amount">Amount</label>
                   <input type="number" id="amount" min="0.01" step="0.01" value={enteredAmount} onChange={amountChangeHandler}/>
               </div>
               <div className="new-expense__control">
                   <label htmlFor="date">Date</label>
                   <input type="date" id="date"min="2019-01-01" max="2022-12-31" value={enteredDate} onChange={dateChangeHandler}/>
               </div>
           </div>
           <div className="new-expense__actions">
               <button type="submit">Add Expense</button>
           </div>
       </form>
    )
}

export default ExpenseForm;