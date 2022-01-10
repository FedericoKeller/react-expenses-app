import { FC } from 'react';
import { FullDate, FullDateProps } from '../../../models/Expense';
import UtilityService from '../../../services/UtilityService';
import './ExpenseDate.css';

const ExpenseDate: FC<FullDateProps> = (props) => {
    const fullDate: FullDate = UtilityService.getFullDate(props.date);

    return (
        <div className='expense-date'>
        <div className='expense-date__month'>{fullDate.month}</div>
        <div className='expense-year'>{fullDate.year}</div>
        <div className='expense-date__day'>{fullDate.day}</div>
      </div>
    )
}



export default ExpenseDate;