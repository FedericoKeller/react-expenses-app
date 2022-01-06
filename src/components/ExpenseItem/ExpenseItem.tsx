
import { FC } from 'react';
import { ExpenseProps, Expense } from '../../models/expenses.interface';
import ExpenseDate from '../ExpenseDate/ExpenseDate';
import './ExpenseItem.css';

const ExpenseItem: FC<ExpenseProps> = (props: ExpenseProps): JSX.Element => {
  const expenseItem: Expense = {...props.expenseItem};
  
  return (
    <div className="expense-item">
      <ExpenseDate date={expenseItem.date}/>
      <div className='expense-item__description'>
        <h2>{expenseItem.title}</h2>
        <div className='expense-item__price'>{expenseItem.amount}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
