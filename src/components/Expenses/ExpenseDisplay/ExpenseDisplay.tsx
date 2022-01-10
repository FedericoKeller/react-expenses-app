import { FC, useState } from "react";
import { ExpenseDisplayProps } from "../../../models/props.interface";
import ExpensesFilter from "../../ExpensesFilter/ExpensesFilter";
import Card from "../../UI/Card/Card";
import './ExpenseDisplay.css';
import ExpensesList from "./ExpensesList/ExpensesList";

const ExpenseDisplay: FC<ExpenseDisplayProps> = (props) => {


    const [selectedYear, setSelectedYear] = useState(2020);

    const filteredExpenses = props.expenses.filter(expense => expense.date.getFullYear() === selectedYear);


    const getExpensesFilterHandler = (year: number) => {
        setSelectedYear(year);
    }

  
    return (
        <div>
            <ExpensesFilter onSelectedYear={getExpensesFilterHandler} defaultYear={selectedYear}/>
            <Card className="expenses">
                <ExpensesList filteredExpenses={filteredExpenses}/>
            </Card>
        </div>
    )
}

export default ExpenseDisplay;