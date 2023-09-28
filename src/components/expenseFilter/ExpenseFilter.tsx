import React from "react";
import "./ExpenseFilter.css";

const ExpenseFilter = ({ onChangeFilter, selected }: any) => {
  const dropdownChangeHandler = (event: any) => {
    onChangeFilter(event.target.value);
  };
  return (
    <div className="expenses-filter">
      <div className="expenses-filter_control">
        <label htmlFor="select" className="expenses_filter_label">
          Filter by year
        </label>
        <select
          value={selected}
          id="select"
          onChange={dropdownChangeHandler}
          className="expenses-filter-select"
        >
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
