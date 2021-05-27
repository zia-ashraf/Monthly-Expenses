import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import "./ExpenseBundle.css";
import ExpenseFilter from "./ExpenseFilter";

const ExpenseBundle = (props) => {
  const [expenseFilterVal, setExpenseFilter] = useState("2020");

  const expenseFilterHandler = (filterYear) => {
    setExpenseFilter(filterYear);
  };
  return (
    <div className="expenses">
      <ExpenseFilter
        initial={expenseFilterVal}
        setExpenseFilter={expenseFilterHandler}
      />
      {props.bundle.map((item) => (
        <ExpenseItem title={item.title} amount={item.amount} date={item.date} />
      ))}
    </div>
  );
};

export default ExpenseBundle;
