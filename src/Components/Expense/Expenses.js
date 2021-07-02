import React, { useState } from "react";
import ExpensesFilter from "../ExpenseFilter/ExpensesFilter";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesChart from "./ExpensesChart";
import ExpensesList from "./ExpensesList";

const Expenses = (props) => {
  const [filterYear, setFilterYear] = useState("2021");
  const onChangedYearHandler = (enteredYear) => {
    setFilterYear(enteredYear);
  };
  const filterExpenseItem = props.expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === filterYear;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selectedYear={filterYear}
          onChangedYear={onChangedYearHandler}
        />
        <ExpensesChart expenses={filterExpenseItem} />
        <ExpensesList items={filterExpenseItem} />
      </Card>
    </div>
  );
};

export default Expenses;
