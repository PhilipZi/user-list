import React, {useState} from "react";


import Card from "../UI/Card";
import Button from "../UI/Button";
import classes from './AddUser.module.css'
import ErrorModal from "../UI/ErrorModal";
import Wrapper from "../Helpers/Wrapper";



function AddUser(props) {


const [enteredUserName, setEntereduserName] = useState('')
const [enteredUserAge, setEnteredUserAge] = useState('')
const [error, setError] = useState();

function nameChangeHandler(event) {
    setEntereduserName(event.target.value)
}
function ageChangeHandler(event) {
    setEnteredUserAge(event.target.value)
}



function addUserHandler(event){
    event.preventDefault()
    console.log(nameInputRef)

    if(enteredUserName.trim().length === 0 || enteredUserAge.trim().length === 0 ) {
        setError({
            title: 'invalid input',
            message: 'Please enter a valid name and age (non-empty values).'
        })
        return; 
    }
    if (+enteredUserAge < 1) {
        setError({
            title: 'Invalid age',
            message: 'Please enter a valid age (> 0).'
        })
    return;
    }
    

    props.onAddUser(enteredUserName, enteredUserAge);


    setEntereduserName('')
    setEnteredUserAge('')
    }
    
    function errorHandler(){
        setError(null)
    }

    return (
        <Wrapper>
        {error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler}/>}
        <Card className={classes.input}>
            <form  onSubmit={addUserHandler}>
                <label htmlFor="username">Username</label>
                <input 
                id="username" 
                type="text" 
                value={enteredUserName} 
                onChange={nameChangeHandler}
                ref={nameInputRef}
                />
                <label htmlFor="age">Age (Years)</label>
                <input 
                id="age"
                type="number" 
                value={enteredUserAge} 
                onChange={ageChangeHandler}
                ref={ageInputRef}
                />
                <Button type="submit">Add User</Button>
                
            </form>
        </Card>
        </Wrapper>
    );
};

export default AddUser;