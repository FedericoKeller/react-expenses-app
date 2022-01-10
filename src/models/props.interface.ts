import { Expense, ExpenseFormData } from "./expenses.interface";

export interface ExpenseProps {
    expenseItem: Expense;
}

export interface ExpensesProps {
    expenses: Expense[];
}

export interface FilteredExpensesProps {
    filteredExpenses: Expense[];
}

export interface ExpenseFormProps {
    onSaveExpenseData: (enteredExpenseData: ExpenseFormData) => void;
    onCancel: () => void;
}

export interface NewExpenseProps {
    onAddExpense: (expenses: Expense) => void;
}

export interface ExpensesFilterProps {
    onSelectedYear: (year: number) => void;
    defaultYear: number;
}