import { FC } from "react";
import { Expense } from "../../../models/Expense";
import { ExpenseProps } from "../../../models/Props";
import Card from "../../UI/Card/Card";
import ExpenseDate from "../ExpenseDate/ExpenseDate";
import "./ExpenseItem.css";

const ExpenseItem: FC<ExpenseProps> = (props): JSX.Element => {
  const expenseItem: Expense = { ...props.expenseItem };

  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date={expenseItem.date} />
        <div className="expense-item__description">
          <h2>{expenseItem.title}</h2>
          <div className="expense-item__price">{expenseItem.amount}</div>
        </div>
      </Card>
    </li>
  );
};

export default ExpenseItem;
