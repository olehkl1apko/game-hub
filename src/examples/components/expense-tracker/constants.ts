export const categories = ["Groceries", "Utilities", "Entertainment"] as const;

export interface Expense {
  id: number;
  description: string;
  amount: number;
  category: string;
}

export const initExpenses: Expense[] = [
  {
    id: 1,
    description: "Milk",
    amount: 1.1,
    category: "Groceries",
  },
  {
    id: 2,
    description: "Coffee",
    amount: 2.5,
    category: "Groceries",
  },
  {
    id: 3,
    description: "Hammer",
    amount: 10,
    category: "Utilities",
  },
  {
    id: 4,
    description: "Table",
    amount: 169,
    category: "Utilities",
  },
];
