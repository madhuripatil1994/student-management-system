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
      students: null
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

  addStudent(students){
    var  updatedStudentList = this.state.students;
    updatedStudentList.push(students);
    this.setState(
      {
        students : updatedStudentList
      }
    );
    console.log(this.state.students);
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
                addStudent = {this.addStudent.bind(this)}
                changeView = {this.changeView.bind(this)}
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
