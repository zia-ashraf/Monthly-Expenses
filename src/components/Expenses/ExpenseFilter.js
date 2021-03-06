import React from "react";

import "./ExpenseFilter.css";

const ExpenseFilter = (props) => {
  const valueSetter = (event) => {
    props.setExpenseFilter(event.target.value);
    // console.log(event.target.value);
  };

  return (
    <div className="expense-filter">
      <div className="expense-filter__control">
        <label>Proportion of money spent each month: </label>
        <select value={props.initial} onChange={valueSetter}>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
        </select>
      </div>
    </div>
  );
};

export default ExpenseFilter;
