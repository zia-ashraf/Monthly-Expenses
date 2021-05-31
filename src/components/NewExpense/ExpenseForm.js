import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  //   const [title, setEnteredTitle] = useState("");
  //   const [date, setEnteredDate] = useState("");
  //   const [amount, setEnteredAmount] = useState("");

  const [userInput, setUserInput] = useState({
    title: "",
    amount: "",
    date: "",
  });

  const submissionHandler = (event) => {
    event.preventDefault();
    // const expenseData = userInput;
    setUserInput((prevState) => {
      props.onSaveExpenseData(prevState);
      return {
        ...prevState,
        date: "", //remember '=' won't be used because this is key value pair.
        title: "",
        amount: "",
      };
    });
  };

  const titleChangeHandler = (event) => {
    // setEnteredTitle(event.target.value);

    setUserInput((prevState) => {
      return {
        ...prevState,
        title: event.target.value,
      };
    });
  };
  const dateChangeHandler = (event) => {
    // setEnteredDate(event.target.value);
    setUserInput((prevState) => {
      return {
        ...prevState,
        date: event.target.value, //HERE
      };
    });
    // console.log(date);
  };
  const AmountChangeHandler = (event) => {
    // setEnteredAmount(event.target.value);
    setUserInput((prevState) => {
      return { ...prevState, amount: event.target.value };
    });
    // console.log(amount);
  };
  return (
    <div>
      <form onSubmit={submissionHandler} className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            onChange={titleChangeHandler}
            value={userInput.title}
            type="text"
            id="title"
            name="title"
          />
        </div>

        <div className="new-expense__control">
          <label>Amount</label>
          <input
            onChange={AmountChangeHandler}
            value={userInput.amount}
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
            value={userInput.date}
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
