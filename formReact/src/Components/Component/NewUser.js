import React,{useState} from 'react';

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
        console.log(enteredAge,enteredUsername);
    }
    return (
        <form onSubmit={onSubmitHandler}>
            <label>Username</label>
            <input onChange={onChangeUser} type="text"/>
            <label>Age</label>
            <input onChange={onChangeAge} type="number"/>

            <button type="submit">Add User</button>
        </form>
    )

}

export default NewUser;