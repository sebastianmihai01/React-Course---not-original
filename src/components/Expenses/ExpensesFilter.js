import React from "react";
import "./ExpensesFilter.css";
//
// Controlled Component (controlled by Expenses.js)
//
const ExpensesFilter = (props) => {
  const filterSelectHandler = (event) => {
    props.onSetExpenseFilter(event.target.value);
  };
  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter by year</label>
        <select onChange={filterSelectHandler}>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;
