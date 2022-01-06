
import { FC } from 'react';
import { ExpenseProps, Expense } from '../../../models/expenses.interface';
import Card from '../../UI/Card/Card';
import ExpenseDate from '../ExpenseDate/ExpenseDate';
import './ExpenseItem.css';

const ExpenseItem: FC<ExpenseProps> = (props): JSX.Element => {
  const expenseItem: Expense = {...props.expenseItem};
  
  return (
    <Card className="expense-item">
      <ExpenseDate date={expenseItem.date}/>
      <div className='expense-item__description'>
        <h2>{expenseItem.title}</h2>
        <div className='expense-item__price'>{expenseItem.amount}</div>
      </div>
    </Card>
  );
}

export default ExpenseItem;
