import { ChangeEvent, FC } from 'react';
import { ExpensesFilterProps } from '../../../models/Props';
import './ExpensesFilter.css';

const ExpensesFilter: FC<ExpensesFilterProps> = (props) => {

    
    const yearChangeHandler = (event: ChangeEvent<HTMLSelectElement>) => {
        props.onSelectedYear(Number.parseInt(event.target.value));
    }
    
  return (
    <div className='expenses-filter'>
      <div className='expenses-filter__control'>
        <label>Filter by year</label>
        <select onChange={yearChangeHandler} value={props.defaultYear}>
          <option value='2022'>2022</option>
          <option value='2021'>2021</option>
          <option value='2020'>2020</option>
          <option value='2019'>2019</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;