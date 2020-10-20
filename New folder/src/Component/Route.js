import React from 'react';
import Header from "./Header";
import Homepage from "./Homepage";
import Register from "./Register";
import Login from "./Login";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

function HomeRoute() {
    return (
        <div>
      <Router>

        <Switch>
        <Route exact path="/" component={Homepage}/>
        <Route  path="/login" component={Login}/>
        <Route path="/register" component={Register}/>
        </Switch>
      </Router>
      </div>
    );
  }
  
  export default HomeRoute;