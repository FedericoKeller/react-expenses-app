import { FC, useState } from "react";
import { Expense } from "../../../models/expenses.interface";
import ExpenseService from "../../../services/expenses.service";
import ExpensesFilter from "../../ExpensesFilter/ExpensesFilter";
import Card from "../../UI/Card/Card";
import ExpenseItem from "../ExpenseItem/ExpenseItem";
import './ExpenseDisplay.css';

const ExpenseDisplay: FC<{}> = () => {
    const expenses: Expense[] = ExpenseService.getExpenses();
    const [selectedYear, setSelectedYear] = useState(2020);
    console.log(selectedYear)


    const getExpensesFilterHandler = (year: number) => {
        setSelectedYear(year);
    }

  
    return (
        <div>
            <ExpensesFilter onSelectedYear={getExpensesFilterHandler} defaultYear={selectedYear}/>
            <Card className="expenses">
            {
                expenses.map((expense, index) => <ExpenseItem key={index} expenseItem={expense} />)
            }
            </Card>
        </div>
    )
}

export default ExpenseDisplay;