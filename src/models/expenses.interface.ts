export interface Expense {
    id: string;
    title: string;
    amount: number;
    date: Date;
}

export type ExpenseFormData = Omit<Expense, "id">;

export interface ExpenseProps {
    expenseItem: Expense;
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

export interface FullDate {
    month: string;
    day: string;
    year: number;
}

export interface FullDateProps {
    date: Date;
}