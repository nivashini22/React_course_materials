import React, { useState } from "react";
import "./ExpenseForm.css";

function ExpenseForm(props){
    const [enterTitle,setEnterTitle] = useState('');
    const [enterMessage,setEnterMessage] = useState('');
    const [enterDate,setEnterDate] = useState('');
    // const [userInput,setUserInput] = useState({
    //      enterTitle: '',
    //      enterMessage: '',
    //      enterDate: ''

    // });
    
    const titleHandler = (event) => {
        // setUserInput({
        //     ...useState,
        //     enterTitle: event.target.value
        // })
       setEnterTitle(event.target.value);

        // setUserInput((prevState) => {
        //     return {...prevState,enterTitle: event.target.value};
        // })
    };

    const messageHandler = (event) => {
        // setUserInput({
        //     ...useState,
        //     enterMessage: event.target.value
        // })
        setEnterMessage(event.target.value);
    };

    

    const dateHandler = (event) => {
        // setUserInput({
        //     ...useState,
        //     enterDate: event.target.value
        // })
        setEnterDate(event.target.value);
    };
    function submitHandler(event) {
        event.preventDefault();
        const expenseData = {
            bday: enterMessage,
            bdayname: enterTitle,
            bdaydate: new Date(enterDate)
        };
        props.onSave(expenseData);
        //expenseData will be passed as parameter to the onSave function in NewExpense.js
        setEnterTitle('');
        setEnterMessage('');
        setEnterDate('');
        
    }
    return <form onSubmit={submitHandler}>
     <div className="new-expense__controls">
     
     <div className="new-expense__control">
     <label>Name</label>
     <input value={enterTitle} type="text" onChange={titleHandler}/>
     </div>
     <div className="new-expense__control">
     
     <label>Age</label>
     <input value={enterMessage}  type='number'
            min='0.01'
            step='0.01' onChange={messageHandler} />
     </div>
     <div className="new-expense__control">
     
     <label>Date of birth</label>
     <input value={enterDate} type="date" min="1999-01-01" max="2004-12-31" onChange={dateHandler}/>
     </div>
        </div>  
        <div className="new-expense__actions">
        <button type="button" onClick={props.onCancel}>Cancel</button>
            <button type="submit">Add birthdays</button></div> 
    </form>
};
export default ExpenseForm;