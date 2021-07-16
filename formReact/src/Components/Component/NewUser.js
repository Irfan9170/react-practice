import React,{useState} from 'react';
import Card from '../UI/Card';
import Button from '../UI/Button';
import styles from './NewUser.module.css'
const NewUser =()=>{
  const [enteredUsername,setUsername]=useState('');
  const [enteredAge,setAge]=useState('');
   
    const onChangeUser =(event)=>{
        setUsername(event.target.value)
       
    }
    const onChangeAge =(event)=>{
        setAge(event.target.value)
    }
    const onSubmitHandler =(event)=>{
        event.preventDefault();
        if(enteredUsername.trim().length===0 || enteredAge.trim().length===0){
            return;
        }
        if(enteredAge < 1){
            return;
        }
        const newUser ={
            userName:enteredUsername,
            userAge:enteredAge
        }
        console.log(newUser)
        setUsername('');
        setAge('');
    }
    return (
        <Card className={styles.input} >
         <form onSubmit={onSubmitHandler}>
            <label>Username</label>
            <input value={enteredUsername} onChange={onChangeUser} type="text"/>
            <label>Age</label>
            <input value={enteredAge} onChange={onChangeAge} type="number"/>

            <Button type="sumbit"/>
        </form>

        </Card>
       
    )

}

export default NewUser;