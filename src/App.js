// import ExpenseItem from "./components/ExpenseItem";
import ExpenseBundle from "./components/Expenses/ExpenseBundle";
import NewExpense from "./components/NewExpense/NewExpense";
function App() {
  const addExpenseHandler = (expenseData) => {
    console.log(expenseData);
  };
  const expenses = [
    {
      id: "e1",
      title: "Paper Roll",
      amount: 94.12,
      date: new Date(2021, 1, 21),
    },
    {
      id: "e2",
      title: "A4 Sheets",
      amount: 21.32,
      date: new Date(2021, 2, 21),
    },
    {
      id: "e3",
      title: "Lamination Machine",
      amount: 114.76,
      date: new Date(2021, 1, 11),
    },
    {
      id: "e4",
      title: "Cardboard",
      amount: 44.27,
      date: new Date(2021, 1, 17),
    },
  ];
  return (
    <div>
      <NewExpense onSubmitExpense={addExpenseHandler} />
      <ExpenseBundle bundle={expenses} />
    </div>
  );
}

export default App;
