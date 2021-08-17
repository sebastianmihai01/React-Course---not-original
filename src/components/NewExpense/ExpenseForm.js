import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  // Set 3 different states
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredPrice, setEnteredPrice] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  // const [userInput, setUserInput] = useState({
  //   enteredTitle: "",
  //   enteredPrice: "",
  //   enteredDate: "",
  // });

  const titleChangeHandler = (event) => {
    // setUserInput({
    //   ...userInput,
    //   enteredTitle: event.target.value,
    // });
    setEnteredTitle(event.target.value);
    //alert("title changed to " + enteredTitle);
  };

  const priceChangeHander = (event) => {
    // setUserInput({
    //   ...userInput,
    //   enteredPrice: event.target.value,
    // });
    setEnteredPrice(event.target.value);
    //alert("price changed");
  };
  const dateChangeHander = (event) => {
    // setUserInput({
    //   ...userInput,
    //   enteredDate: event.target.value,
    // });
    setEnteredDate(event.target.value);
    //alert("date changed");
  };

  const submitHandler = (event) => {
    event.preventDefault();

    // merge all values together
    // key names are up to us
    // values point to the state vals
    const expenseData = {
      title: enteredTitle,
      amount: enteredPrice,
      date: new Date(enteredDate),
    };

    // Now we execute the prop as a FUNCTION, with ()
    // onSaveExpenseData prop (from file NewExpense.js) is basically a POINTER
    props.onSaveExpenseData(expenseData);

    //console.log(expansedata)

    // Two way binding
    // Specifically, clearnig the input after a submitted form
    setEnteredTitle("");
    setEnteredDate("");
    setEnteredPrice("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label> Insert your title! </label>
          <input
            type="text"
            value={enteredTitle} //clearing the input
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label> Insert your price! </label>
          <input
            type="number"
            min="0.1"
            step="0.01"
            value={enteredPrice} //clearing the input
            onChange={priceChangeHander}
          />
        </div>
        <div className="new-expense__control">
          <label> Insert your date! </label>
          <input
            type="date"
            min="2019-01-01"
            max="2023-01-01"
            value={enteredDate} //clearing the input
            onChange={dateChangeHander}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit"> Add Expense! </button>
      </div>
    </form>
  );
};

export default ExpenseForm;
