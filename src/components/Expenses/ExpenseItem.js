import React, { useState } from "react";
import "./ExpenseItem.css";

import ExpenseDate from "./ExpenseDate";

function ExpenseItem(props) {
  // deconstruction used to store the intial val as 1st param and the changed value as 2nd param

  const [title, setTitle] = useState(props.title);
  // console.log(props.date);

  const clickHandler = () => {
    setTitle("Updated");
    console.log(title);
  };

  return (
    <div className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      <button onClick={clickHandler}> this here.</button>
    </div>
  );
}

export default ExpenseItem;
