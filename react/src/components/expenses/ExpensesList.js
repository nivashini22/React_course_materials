import React from "react";
import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css";



const ExpensesList = props => {
    

    if (props.items.length === 0){
        return <h2 className="expenses-list__fallback">Found no birthdays.</h2>
    }
   
    
    return (<ul className="expenses-list">
        {props.items.map((expense) => (
        <ExpenseItem 
        key={expense.id}
        bdayname={expense.bdayname}
        bday={expense.bday}
        bdaydate={expense.bdaydate} />
    ))}
    </ul>
);
};
export default ExpensesList;