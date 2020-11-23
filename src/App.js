import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './App.css';


import 'bootstrap/dist/css/bootstrap.min.css';


import ExampleNavbar from './components/ExamplesNavbar';
import DarkFooter from './components/Footers/DarkFooter';
import LandingPageHeader from './components/Headers/LandingPageHeader';
import LandingPage from './components/LandingPage';
import LoginPage from './components/LoginPage';
import SignUp from "./components/SignUp";


function App() { 
  return (
    <Router>
    <div className="App">
     <ExampleNavbar />
    {/* <LandingPageHeader /> */}
   

      <div className="auth-wrapper">
        <div className="auth-inner">
          <Switch>
            <Route exact path='/' component={LandingPage} />
            <Route path="/sign-in" component={LoginPage} />
            <Route path="/sign-up" component={SignUp} />
          </Switch>
        </div>
      </div>
     
    </div>
    {/* <DarkFooter />  */}
    </Router>
    
  );
}

export default App;
