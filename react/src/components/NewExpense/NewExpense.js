import React , {useState} from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

function NewExpense(props){
    const[isEditing,setIsEditing] = useState(false);
    const saveHandler =(enteredData) => {
        const expenseData ={
            ...enteredData,
            id: Math.random().toString()
        };
        props.onAdd(expenseData);
        setIsEditing(false);
    };
    const startEditingHandler = () => {
        setIsEditing(true);
      };
    
      const stopEditingHandler = () => {
        setIsEditing(false);
      };
    return (<div className="new-expense">
        {!isEditing && (
        <button onClick={startEditingHandler}>Add New Birthday</button>
      )}
      {isEditing && (<ExpenseForm onSave={saveHandler} onCancel={stopEditingHandler}/>)}
       
    </div>
    );

}
export default NewExpense;