// this class Renders the Form

import {useState} from 'react'
import './NewExpense.css'
import ExpenseForm from './ExpenseForm';

//props added from app.js
const NewExpese = (props) => {
  const [isEditing, setIsEditing] = useState(false)

  // param has custom name
  // this param will be (exists) filled inside the child component (ExpenseForm)
  // this function will be called in the CHILD COMPONENT
  const saveExpenseDataHandler = (enteredExpenseData) => {

    const expenseData = {
      // the data passed from ExpenseForm
      ...enteredExpenseData,
      id: Math.random().toString()
    }
    
    props.onAddExpense(expenseData)

    setIsEditing(false);
    //console.log(expenseData)
  }

  
  const startEditingHandler = () => {
    setIsEditing(true);
  };

  const stopEditingHandler = () => {
    setIsEditing(false);
  };



  // onSaveExpenseData (custom name) = a prop
  // convention "on[...]" = a function that will be triggered when
  //                something happens inside ExpanseForm component
  // this function will therefore BE CALLED INSIDE ExpanseForm (because it is a prop, so we can use it there)
  // saveExpenseDataHander does not have (), therefore it is a POINTER (the ExpenseForm child will POINT using this)
  // onSaveExpenseData will be a props for the child component
  return (
    <div className='new-expense'>
      {!isEditing && (
        <button onClick={startEditingHandler}>Add New Expense</button>
      )}
      {isEditing && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={stopEditingHandler}
        />
      )}
    </div>
  );}

export default NewExpese;
