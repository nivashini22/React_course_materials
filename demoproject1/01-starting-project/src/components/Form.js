import { useState } from "react";

function Form(props){

    const [userInput,setUserInput ] =   useState({
    'current-savings': 10000,
    'yearly-contribution':1200,
    'expected-return' : 7,
    'duration':10
  });

    function submitHandler(event){
        event.preventDefault();
   props.onCalculate(userInput);
    };

    function clickHandler(){
      setUserInput({
    'current-savings': 10000,
    'yearly-contribution':1200,
    'expected-return' : 7,
    'duration':10
  });
        console.log("clicked");
    }

    function inputChangeHandler(identifier,value){
      setUserInput((prevValue) => {
        return {
          ...prevValue,
          [identifier] : +value,
        }

      })
console.log(identifier,value);
    }

   
    return (
        <form className="form" onSubmit={submitHandler}>
        <div className="input-group">
          <p>
            <label htmlFor="current-savings">Current Savings ($)</label>
            <input value={userInput["current-savings"]} onChange={(event) => inputChangeHandler('current-savings',event.target.value)}
             type="number" 
             id="current-savings" />
          </p>
          <p>
            <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
            <input value={userInput["yearly-contribution"]} onChange={(event) => inputChangeHandler('yearly-contribution',event.target.value)} 
            type="number" id="yearly-contribution" />
          </p>
        </div>
        <div className="input-group">
          <p>
            <label htmlFor="expected-return">
              Expected Interest (%, per year)
            </label>
            <input value={userInput["expected-return"]} onChange={(event) => inputChangeHandler('expected-return',event.target.value)} 
            type="number" id="expected-return" />
          </p>
          <p>
            <label htmlFor="duration">Investment Duration (years)</label>
            <input value={userInput["duration"]} onChange={(event) => inputChangeHandler('duration',event.target.value)} 
            type="number" id="duration" />
          </p>
        </div>
        <p className="actions">
          <button onClick={clickHandler} type="reset" className="buttonAlt">
            Reset
          </button>
          <button type="submit" className="button">
            Calculate
          </button>
        </p>
      </form>
    );
}

export default Form;