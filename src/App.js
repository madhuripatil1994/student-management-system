import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Header from './Components/Header';
import Footer from './Components/Footer';
import MainContainer from './Containers/MainContainer';
import SignIn from './Containers/sign-in/SignIn';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      view : 0,
      isLoggedIn: true,
      students: [{
        firstName:"Madhuri",
        lastName:"Patil",
        class:"12th",
        teacher:"ABC"
      }]
    }

  }

  changeView(view){
    this.setState(
      {
        view : view
      }
    );
  }

  changeLoggedIn(isLoggedIn){
    this.setState(
      {
        isLoggedIn : isLoggedIn
      }
    );
  }

  render() {
    return (
      <div className="App">
        <Header
        changeView = {this.changeView.bind(this)}
        isLoggedIn = {this.state.isLoggedIn}
        changeLoggedIn = {this.changeLoggedIn.bind(this)}/>
        
        <div className="row">
        <div className="col-sm-3"></div>
            <div className="col-sm-6 main-container">
            {
              this.state.isLoggedIn ?
              <MainContainer 
                view = {this.state.view}
                isLoggedIn = {this.state.isLoggedIn}
                students = {this.state.students} 
                />
              : < SignIn 
             changeLoggedIn = {this.changeLoggedIn.bind(this)}/>
            }
            </div>
        
        </div>  
        <Footer />
      </div>
    );
  }
}

export default App;
