import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [title, setEnteredTitle] = useState("");
  const [date, setEnteredDate] = useState("");
  const [amount, setEnteredAmount] = useState("");

  // const [userInput, setUserInput] = useState({
  //   title: "",
  //   amount: 0,
  //   date: "",
  // });

  const submissionHandler = (event) => {
    event.preventDefault();
    // const expenseData = userInput;
    // event.preventDefault();

    const expenseData = {
      title: title,
      amount: amount,
      date: new Date(date),
    };

    props.onSaveExpenseData(expenseData);
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
    // setUserInput((prevState) => {
    //   props.onSaveExpenseData(prevState);
    //   return {
    //     ...prevState,
    //     date: "", //remember '=' won't be used because this is key value pair.
    //     title: "",
    //     amount: "",
    //   };
    // });
  };

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);

    // setUserInput((prevState) => {
    //   return {
    //     ...prevState,
    //     title: event.target.value,
    //   };
    // });
  };
  const dateChangeHandler = (event) => {
    // console.log(userInput.date);
    setEnteredDate(event.target.value);
    // setUserInput((prevState) => {
    //   return {
    //     ...prevState,
    //     date: new Date(event.target.value), //HERE
    //   };
    // });
  };
  const AmountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
    // setUserInput((prevState) => {
    //   return { ...prevState, amount: Number(event.target.value) };
    // });
    // console.log(amount);
  };
  return (
    <div>
      <form onSubmit={submissionHandler} className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            onChange={titleChangeHandler}
            value={title}
            type="text"
            id="title"
            name="title"
          />
        </div>

        <div className="new-expense__control">
          <label>Amount</label>
          <input
            onChange={AmountChangeHandler}
            value={amount}
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
            value={date}
            type="date"
            min="2018-01-01"
            max="2022-12-31"
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
