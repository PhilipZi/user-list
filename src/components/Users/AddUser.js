import React, {useState} from "react";


import Card from "../UI/Card";
import Button from "../UI/Button";
import classes from './AddUser.module.css'
import ErrorModal from "../UI/ErrorModal";



function AddUser(props) {


const [enteredUserName, setEntereduserName] = useState('')
const [enteredUserAge, setEnteredUserAge] = useState('')

function nameChangeHandler(event) {
    setEntereduserName(event.target.value)
}
function ageChangeHandler(event) {
    setEnteredUserAge(event.target.value)
}



function addUserHandler(event){
    event.preventDefault()

    if(enteredUserName.trim().length === 0 || enteredUserAge.trim().length === 0 ) {
        return; 
    }
    if (+enteredUserAge < 1) {
    return;
    }
    

    props.onAddUser(enteredUserName, enteredUserAge);
    setEntereduserName('')
    setEnteredUserAge('')
    }
    

    return (
        <div>
        <ErrorModal title="An error occured!" message="Something went wrong!"/>
        <Card className={classes.input}>
            <form  onSubmit={addUserHandler}>
                <label htmlFor="username">Username</label>
                <input id="username" type="text" value={enteredUserName} onChange={nameChangeHandler}/>
                <label htmlFor="age">Age (Years)</label>
                <input id="age"type="number" value={enteredUserAge} min="1" step="1" onChange={ageChangeHandler}/>
                <Button type="submit">Add User</Button>
                
            </form>
        </Card>
        </div>
    );
};

export default AddUser;