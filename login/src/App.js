import React, { useState,useEffect } from 'react';
import {Route,Switch,Redirect} from 'react-router-dom'
import Login from './components/Login/Login';
import Home from './components/Home/Home';
import MainHeader from './components/MainHeader/MainHeader';
import Jokes from './components/Jokes/Jokes'

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const loginHandler = (email, password) => {
    // We should of course check email and password
    // But it's just a dummy/ demo anyways
    localStorage.setItem('login','1');
    setIsLoggedIn(true);
  };
  useEffect(() => {
    
    const userInformation = localStorage.getItem('login');
    if(userInformation==='1'){
      setIsLoggedIn(true);
    }
  }, [])

  const logoutHandler = () => {
    localStorage.removeItem('login')
    setIsLoggedIn(false);
  };

  return (
    <React.Fragment>
      <main>
      <MainHeader isAuthenticated={isLoggedIn} onLogout={logoutHandler} />
     
           {/* <Route path='/' exact > */}
             {/* <Redirect  to = "/login"/> */}
           {/* </Route> */}
          {/* <Route path="/login" > */}
          {!isLoggedIn && <Login onLogin={loginHandler} />}
          {/* </Route> */}
          {/* <Route path="/dashboard" exact> */}
          {isLoggedIn && <Home onLogout={logoutHandler} />}
          {/* </Route> */}
          <Route path="/jokes" exact>
               <Jokes />
          </Route>
       
        
        
      </main>
    </React.Fragment>
  );
}

export default App;
