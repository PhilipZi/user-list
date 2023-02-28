import React, {useState, Fragment} from 'react';


import AddUser from './components/Users/AddUser';
import UsersList from './components/Users/UsersList';

function App() {
 const [usersList, setUsersList] = useState([])

function addUserHandler(uName, uAge){
  setUsersList((prevUsersList) => {
    return [...prevUsersList, {name: uName, age: uAge, id: Math.random().toString()}]
  });
}

  return (
    <Fragment>
      <AddUser onAddUser={addUserHandler}/>
      <UsersList users={usersList}/>
    </Fragment>
  );
}

export default App;
