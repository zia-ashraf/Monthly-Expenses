import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  //   const [enteredTitle, setEnteredTitle] = useState("");
  //   const [enteredDate, setEnteredDate] = useState("");
  //   const [enteredAmount, setEnteredAmount] = useState("");

  const [userInput, setUserInput] = useState({
    enteredTitle: "",
    enteredAmount: "",
    enteredDate: "",
  });

  const submissionHandler = (event) => {
    event.preventDefault();
    // const expenseData = userInput;
    setUserInput((prevState) => {
      props.onSaveExpenseData(prevState);
      return {
        ...prevState,
        enteredDate: "", //remember '=' won't be used because this is key value pair.
        enteredTitle: "",
        enteredAmount: "",
      };
    });
  };

  const titleChangeHandler = (event) => {
    // setEnteredTitle(event.target.value);
    setUserInput((prevState) => {
      return {
        ...prevState,
        enteredTitle: event.target.value,
      };
    });

    // console.log(enteredTitle);
  };
  const dateChangeHandler = (event) => {
    // setEnteredDate(event.target.value);
    setUserInput((prevState) => {
      return {
        ...prevState,
        enteredDate: event.target.value,
      };
    });
    // console.log(enteredDate);
  };
  const AmountChangeHandler = (event) => {
    // setEnteredAmount(event.target.value);
    setUserInput((prevState) => {
      return { ...prevState, enteredAmount: event.target.value };
    });
    // console.log(enteredAmount);
  };
  return (
    <div>
      <form onSubmit={submissionHandler} className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            onChange={titleChangeHandler}
            value={userInput.enteredTitle}
            type="text"
            id="title"
            name="title"
          />
        </div>

        <div className="new-expense__control">
          <label>Amount</label>
          <input
            onChange={AmountChangeHandler}
            value={userInput.enteredAmount}
            type="number"
            id="amount"
            min="0.1"
            step="0.01"
          ></input>
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            onChange={dateChangeHandler}
            value={userInput.enteredDate}
            type="date"
            min="2018-01-01"
            max="2021-12-31"
          ></input>
        </div>
        <div className="new-expense__actions">
          <button type="submit">Add Expense</button>
        </div>
      </form>
    </div>
  );
};

export default ExpenseForm;
