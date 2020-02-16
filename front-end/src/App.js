import React, { Component } from 'react'
import "./assets/vendor/nucleo/css/nucleo.css";
import "./assets/vendor/font-awesome/css/font-awesome.min.css";
import "./assets/css/argon-design-system-react.css";

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import LandingPage from './pages/LandingPage'
import LoginPage from './pages/LoginPage'
import Register from './pages/Register'
import PropertyDetail from './pages/Pr_Detail'
import PropertyError from './pages/PropertyError'
import SearchPage from './pages/SearchPage';


class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
         
    }
  }

  render() {
    return (
      <div>
        <Router>
        <Switch>
        <Route component={LandingPage} path="/" exact />
        <Route component={LoginPage} path="/Login" exact />
        <Route component={Register} path="/Register" exact />
        <Route component={PropertyDetail} path="/PropertyDetail" exact />
        <Route component={SearchPage} path="/search-page" exact />
        </Switch>
      </Router>
        
      </div>
    )
  }
}

export default App

