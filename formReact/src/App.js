import React,{useState} from 'react';
import NewUser from './Components/Component/NewUser';
import ShowUser from './Components/Component/ShowUser';



function App() {

  const [users,setUsers]=useState([])

const onNewUserHandler=(newUser)=>{
   setUsers(prevUsers =>{
    return [newUser,...users]
   })
}

  return (
    <div>
   <NewUser onNewUser={onNewUserHandler}  />
   <ShowUser users={users}/>
    </div>
  );
}

export default App;
