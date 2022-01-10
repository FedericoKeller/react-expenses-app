export interface Expense {
    id: string;
    title: string;
    amount: number;
    date: Date;
}

export type ExpenseFormData = Omit<Expense, "id">;

export interface FullDate {
    month: string;
    day: string;
    year: number;
}

export interface FullDateProps {
    date: Date;
}