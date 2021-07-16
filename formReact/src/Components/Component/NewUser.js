import React,{useState} from 'react';
import Card from '../UI/Card';
import Button from '../UI/Button';
import styles from './NewUser.module.css';
import Error from '../UI/Error';
const NewUser =(props)=>{
  const [enteredUsername,setUsername]=useState('');
  const [enteredAge,setAge]=useState('');
  const [error,setError]=useState();
   
    const onChangeUser =(event)=>{
        setUsername(event.target.value)
       
    }
    const onChangeAge =(event)=>{
        setAge(event.target.value)
    }
    const onSubmitHandler =(event)=>{
        event.preventDefault();
        if(enteredUsername.trim().length===0 || enteredAge.trim().length===0){
            setError({
                title:"Invalid Input",
                message:"Enter name and age"
            })
            return;
        }
        if(enteredAge < 1){
            setError({
                title:"Invalid Age",
                message:"Enter  age (age>0)"
            })
            return;
        }
        const newUser ={
            userName:enteredUsername,
            userAge:enteredAge,
            id:Math.random().toString()
        }
        props.onNewUser(newUser);
        
        setUsername('');
        setAge('');
    }
    const errorHandler =()=>{
        setError(null);
    }
    return (
        <div>
           {error && <Error  errorHandler={errorHandler} title={error.title} message={error.message} />} 
        <Card className={styles.input} >
         <form onSubmit={onSubmitHandler}>
            <label>Username</label>
            <input value={enteredUsername} onChange={onChangeUser} type="text"/>
            <label>Age</label>
            <input value={enteredAge} onChange={onChangeAge} type="number"/>

            <Button type="sumbit">Add new User</Button>
        </form>

        </Card>
        
        </div>
       
    )

}

export default NewUser;