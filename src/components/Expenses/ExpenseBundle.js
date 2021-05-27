import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import "./ExpenseBundle.css";
import ExpenseFilter from "./ExpenseFilter";

const ExpenseBundle = (props) => {
  const [expenseFilterVal, setExpenseFilter] = useState("2019");

  const expenseFilterHandler = (filterYear) => {
    // console.log(filterYear);
    console.log(expenseFilterVal);
    setExpenseFilter(filterYear);
  };
  return (
    <div className="expenses">
      <ExpenseFilter
        setExpenseFilter={expenseFilterHandler}
        intial={expenseFilterVal}
      />
      <ExpenseItem
        title={props.bundle[0].title}
        amount={props.bundle[0].amount}
        date={props.bundle[0].date}
      ></ExpenseItem>
      <ExpenseItem
        title={props.bundle[1].title}
        amount={props.bundle[1].amount}
        date={props.bundle[1].date}
      ></ExpenseItem>
      <ExpenseItem
        title={props.bundle[2].title}
        amount={props.bundle[2].amount}
        date={props.bundle[2].date}
      ></ExpenseItem>
      <ExpenseItem
        title={props.bundle[3].title}
        amount={props.bundle[3].amount}
        date={props.bundle[3].date}
      ></ExpenseItem>
    </div>
  );
};

export default ExpenseBundle;
