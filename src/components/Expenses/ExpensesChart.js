import Chart from "../Chart/Chart";

const ExpensesChart = (props) => {
    // initial values are 0
  const chartDataPoints = 
    [
      {label: 'Jan', value: 0}, 
      {label: 'Feb', value: 0},
      {label: 'Mar', value: 0},
      {label: 'Apr', value: 0},
      {label: 'May', value: 0},
      {label: 'Jun', value: 0},
      {label: 'Jul', value: 0},
      {label: 'Aug', value: 0},
      {label: 'Sep', value: 0},
    
    ];

    // we expect filtered expenses from Expenses.js
    // for-of = used for ARRAYS
    // for-in = used for OBJECTS
    for(const expense of props.expenses) {
        // expenseMonth = 0->11 values
        const expenseMonth = expense.date.getMonth(); //starting at 0 => Jan = 0
        chartDataPoints[expenseMonth].value += expense.amount //now sum up values added, no longer 0

    }
  return <Chart dataPoints = {chartDataPoints} />;
};

export default ExpensesChart;
