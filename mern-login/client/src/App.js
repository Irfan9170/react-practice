import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Routing
// import LoginScreen from "./components/screens/LoginScreen";
import Register from "./components/UI/Register";
import Login from './components/UI/Login'

const App = () => {
  return (
    <Router>
      <div className="app">
        <Switch>
          {/* <PrivateRoute exact path="/" component={PrivateScreen} /> */}
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
         
        </Switch>
      </div>
    </Router>
  );
};

export default App;