import { useState } from "react";

import { ExpenseFilter, ExpenseForm, ExpenseList } from "./components";
import { Expense, initExpenses } from "./constants";

function AppTracker() {
  const [expenses, setExpenses] = useState<Expense[]>(initExpenses || []);
  const [category, setCategory] = useState<string>("");

  return (
    <>
      <ExpenseForm
        onSubmit={(data) =>
          setExpenses([
            ...expenses,
            { id: Math.floor(Math.random() * 10), ...data },
          ])
        }
      />
      <ExpenseFilter onSelectCategory={(category) => setCategory(category)} />
      <ExpenseList
        expenses={expenses.filter((expense) =>
          category ? expense.category === category : expense
        )}
        onDelete={(id: number) =>
          setExpenses(expenses.filter((expense) => expense.id !== id))
        }
      />
    </>
  );
}

export default AppTracker;
