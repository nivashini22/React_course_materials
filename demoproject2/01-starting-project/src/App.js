import React, {useState} from 'react';
import AddUser from './components/AddUser';
import UsersList from './components/UsersList';
function App() {
  const[usersList,setUsersList] = useState([]);
  
  function addUser(uName,uAge){
    setUsersList((prevUsersList) => {
      return [...prevUsersList,{name: uName,age:uAge,id:Math.random().toString()}];
    })
  }
  return (
    <div>
      <AddUser onAddUser={addUser} />
      <UsersList users={usersList}/>

    </div>
  );
}

export default App;
