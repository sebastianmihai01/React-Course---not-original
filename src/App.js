import React, { useState } from "react";
import Card from "./components/UI/Card";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

const App = () => {


  // initial date
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);


  // triggered when an expense is added
  const addExpenseHandler = (expense) => {
    // prevExpenses is given autoamicallyF by React
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
      //console.log(expense)}
    });
  };

  //onAddExpense (function pointer) custom name
  return (
    <div>
      <h2 align = 'center'>Let's get started!</h2>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
      <Card />
    </div>
  );
};

export default App;
