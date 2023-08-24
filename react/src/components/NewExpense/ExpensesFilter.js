import React from 'react';

import './ExpensesFilter.css';

const ExpensesFilter = (props) => {
  const dropdownHandler = (event) => {
    props.onChangeFilter(event.target.value);
  };
  return (
    <div className='expenses-filter'>
      <div className='expenses-filter__control'>
        <label>Filter by year</label>
        <select value={props.selected} onChange={dropdownHandler}>
          <option value='1999'>1999</option>
          <option value='2000'>2000</option>
          <option value='2001'>2001</option>
          <option value='2002'>2002</option>
          <option value='2003'>2003</option>
          <option value='2004'>2004</option>
          




        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;