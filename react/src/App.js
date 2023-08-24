import ExpenseItem from "./components/expenses/ExpenseItem";
import Expenses from "./components/expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import React , { useState } from "react";
const Dummy_Birth = [
  { id:1,
    bdaydate : new Date(2002, 3, 22),
    bdayname:"Nivashini",
    bday:21},
   
      { id:2,
        bdaydate : new Date(2004, 7, 11),
        bdayname:"Jeevitha",
        bday:19},
        { id:3,
          bdaydate : new Date(2000, 4, 16),
          bdayname:"Abinaya",
          bday:22},
          { id:4,
            bdaydate : new Date(1999, 7, 25),
            bdayname:"Afrina",
            bday:23}
];
function App() {
  
  const [births,setBirths] = useState(Dummy_Birth);
const addExpense = (birth) =>{
  setBirths((prevBirth) => {
    return [birth,...prevBirth]
  });
};

  return (
    <div>
      <NewExpense onAdd={addExpense}/>
      <Expenses birth={births}/>
      

    </div>
  );
}

export default App;
