export interface Expense {
    id: string;
    title: string;
    amount: number;
    date: Date;
}

export interface ExpenseProps {
    expenseItem: Expense;
}

export interface FullDate {
    month: string;
    day: string;
    year: number;
}

export interface FullDateProps {
    date: Date;
}