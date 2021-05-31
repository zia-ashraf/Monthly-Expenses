import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import "./ExpenseBundle.css";
import ExpenseFilter from "./ExpenseFilter";

const ExpenseBundle = (props) => {
  const [expenseFilterVal, setExpenseFilter] = useState("2021");

  const expenseFilterHandler = (filterYear) => {
    setExpenseFilter(filterYear);
    setExpenseFilter((filterYearchecker) => {
      return filterYearchecker;
    });
  };
  // console.log(expenseFilterVal);

  const filteredExpenses = props.bundle.filter((item) => {
    // console.log(item.date.getFullYear().toString());
    return item.date.getFullYear().toString() === expenseFilterVal;
  });
  // console.log(filteredExpenses);

  return (
    <div className="expenses">
      <ExpenseFilter
        initial={expenseFilterVal}
        setExpenseFilter={expenseFilterHandler}
      />
      {filteredExpenses.length === 0 ? (
        <p>No item for this year</p>
      ) : (
        filteredExpenses.map((item) => (
          <ExpenseItem
            key={item.id}
            title={item.title}
            amount={item.amount}
            date={item.date}
          />
        ))
      )}
    </div>
  );
};

export default ExpenseBundle;
