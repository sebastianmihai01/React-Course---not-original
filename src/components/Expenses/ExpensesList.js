import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css";

const ExpensesList = (props) => {
  if (props.items.length === 0) {
    return <h2 className="expenses-list__fallback">Found no expenses.</h2>;
  }
  /*
        // for every item in the prop.items

        //props.items.map((expense) => (
           if (props.items.lenght > 0){
            const expensesContent = props.items.map((expense) => {
          <ExpenseItem
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        })}
        */

  // if no items exist
  //...
  // if (props.items.length === 0) {
  //   return <h2 className="expenses-list__fallback"> Found no expenses! </h2>;
  // }

  // unordered list
  return (
    <ul className="expenses-list">
      {props.items.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </ul>
  );
};

export default ExpensesList;
