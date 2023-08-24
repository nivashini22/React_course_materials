import React, { useState, useRef } from "react";
import Card from "./Card";
import classes from "./AddUser.module.css";
import Button from "./Button";
import UsersList from "./UsersList";
import ErrorModal from "./ErrorModal";

function AddUser(props){

    const nameInputRef = useRef();
    const ageInputRef = useRef();

    
    const[error,setError]=useState();

    function addUserHandler(event){
        event.preventDefault();
        const Name = nameInputRef.current.value;
        const Age = ageInputRef.current.value;
        console.log(nameInputRef.current.value);
        if (Name.trim().length === 0 || Age.trim().length ===0){
            setError({
                title:'Invalid Input',
                message:'Please enter a valid name and age (non-empty values).'
            });
            return;
        }
        if (+Age < 1){
            setError({
                title:'Invalid Age',
                message:'Please enter a valid age (> 0).'
            });
            
            return;
        }
        props.onAddUser(Name,Age);
        nameInputRef.current.value ='';
        ageInputRef.current.value ='';

        
        
    }

   
    const errorHandler = () => {
        setError(null);
    };
    
return (
    <div>
    {error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler} />}
    <Card className={classes.input}>
    <form onSubmit={addUserHandler}>
        <label htmlFor="username">Username</label>
        <input 
        id="userame" 
        type="text"
        ref={nameInputRef} />
        <label htmlFor="age">Age(Years)</label>
        <input 
        id="age" 
        type="number"
        ref={ageInputRef} />
        <Button type="submit">Add User</Button>
    </form>
    
    </Card>
    </div>
    );

};

export default AddUser;