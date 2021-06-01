import React from "react";
import ExpenseItem from "./ExpenseItem";
import "./ExpenseList.css";

const ExpenseList = (props) => {
  // let expenseContent;

  if (props.listItems.length === 0) {
    return (
      <h2 className="expenses-list__fallback">No expenses for this year</h2>
    );
  }
  return (
    <ul className="expenses-list">
      {props.listItems.map((item) => (
        <ExpenseItem
          key={item.id}
          title={item.title}
          amount={item.amount}
          date={item.date}
        />
      ))}
    </ul>
  );
};

export default ExpenseList;
