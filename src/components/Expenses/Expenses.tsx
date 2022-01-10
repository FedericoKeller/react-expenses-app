import { FC, useState } from "react";
import { ExpensesProps } from "../../models/props.interface";
import ExpensesFilter from "./ExpensesFilter/ExpensesFilter";
import Card from "../UI/Card/Card";
import './Expenses.css';
import ExpensesList from "./ExpensesList/ExpensesList";

const Expenses: FC<ExpensesProps> = (props) => {


    const [selectedYear, setSelectedYear] = useState(2020);

    const filteredExpenses = props.expenses.filter(expense => expense.date.getFullYear() === selectedYear);


    const getExpensesFilterHandler = (year: number) => {
        setSelectedYear(year);
    }

  
    return (
        <div>
            <Card className="expenses">
                <ExpensesFilter onSelectedYear={getExpensesFilterHandler} defaultYear={selectedYear}/>
                <ExpensesList filteredExpenses={filteredExpenses}/>
            </Card>
        </div>
    )
}

export default Expenses;