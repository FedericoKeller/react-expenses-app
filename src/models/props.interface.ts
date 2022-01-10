import { Expense, ExpenseFormData } from "./expenses.interface";

export interface ExpenseProps {
    expenseItem: Expense;
}

export interface ExpenseDisplayProps {
    expenses: Expense[];
}

export interface FilteredExpensesProps {
    filteredExpenses: Expense[];
}

export interface ExpenseFormProps {
    onSaveExpenseData: (enteredExpenseData: ExpenseFormData) => void;
}

export interface NewExpenseProps {
    onAddExpense: (expenses: Expense) => void;
}

export interface ExpensesFilterProps {
    onSelectedYear: (year: number) => void;
    defaultYear: number;
}