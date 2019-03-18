import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import Navbar from './components/layout/navbar'
import Dashboard from './components/dashboard/dashboard';
import SignUp from './components/auth/signUp'
import LogIn from './components/auth/logIn'
import CreateProject from './components/projects/createProject'
import ProjectDetails from './components/projects/projectDetails'


class App extends Component {
  
  render() {
  
    return (
      <BrowserRouter>
      <div className="App">
        <Navbar/>
        <Route exact path ="/" component = {Dashboard}/>
        <Route path ="/signup" component = {SignUp}/>
        <Route path ="/login" component = {LogIn}/>
        <Route path ="/newproject" component = {CreateProject}/>
        <Route path ="/project/:id" component = {ProjectDetails}/>
        
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
