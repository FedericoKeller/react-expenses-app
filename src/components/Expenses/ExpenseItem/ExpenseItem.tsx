import { FC, useState } from "react";
import { Expense } from "../../../models/expenses.interface";
import { ExpenseProps } from "../../../models/props.interface";
import Card from "../../UI/Card/Card";
import ExpenseDate from "../ExpenseDate/ExpenseDate";
import "./ExpenseItem.css";

const ExpenseItem: FC<ExpenseProps> = (props): JSX.Element => {
  const expenseItem: Expense = { ...props.expenseItem };

  const [title, setTitle] = useState(expenseItem.title);

  const clickHandler = () => {
    setTitle("Updated!");
  };

  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date={expenseItem.date} />
        <div className="expense-item__description">
          <h2>{title}</h2>
          <div className="expense-item__price">{expenseItem.amount}</div>
        </div>
        <button onClick={clickHandler}>Change Title</button>
      </Card>
    </li>
  );
};

export default ExpenseItem;
