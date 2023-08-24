import React from "react";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

import "./ExpenseItem.css"



function ExpenseItem(props){
    
   
    return (
        <li>
        <Card className="expense-item">
            <ExpenseDate bdaydate={props.bdaydate} />
            
            <div className="expense-item__description">
                <h2>{props.bdayname}</h2>
                <div className="expense-item__price">Age: {props.bday}</div>
                
            </div>
        </Card>
        </li>

    );
}

export default ExpenseItem;