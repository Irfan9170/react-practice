import React from 'react';
import NewUser from './Components/Component/NewUser';
import ShowUser from './Components/Component/ShowUser'


function App() {
  return (
    <div>
   <NewUser />
   <ShowUser users={[]}/>
    </div>
  );
}

export default App;
