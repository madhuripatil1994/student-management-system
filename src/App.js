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
      students:[
        {
          firstName: "Madhuri",
          lastName: 'Patil',
          class: 10,
          teacher: 'xyz'
        }
      ],
      teachers : [
        {
          firstName: "Madhuri",
          lastName: 'Patil',
          subject : 'Maths'
        }
      ]
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

  addStudent(student){
    var  updatedStudentList = this.state.students;
    updatedStudentList.push(student);
    this.setState(
      {
        students : updatedStudentList
      }
    );
    console.log(this.state.students);
  }

  addTeacher(teacher){
    var  updatedTeacherList = this.state.teachers;
    updatedTeacherList.push(teacher);
    this.setState(
      {
        teachers : updatedTeacherList
      }
    );
  }

  deleteStudent(index){

    var updatedStudentList = this.state.students;
    this.state.students.forEach(function(student,originalIndex){

      if(index == originalIndex){
        updatedStudentList.pop(index)
      }

    });
    this.setState(
      {
        students :updatedStudentList
      }
    );
  }

  deleteTeacher(index){

    var updatedTeacherList = this.state.teachers;
    this.state.teachers.forEach(function(student,originalIndex){

      if(index == originalIndex){
        updatedTeacherList.pop(index)
      }

    });
    this.setState(
      {
        teachers :updatedTeacherList
      }
    );
  }

  render() {
    return (
      <div className="App">
        {/* <Header
          changeView = {this.changeView.bind(this)}
          isLoggedIn = {this.state.isLoggedIn}
          changeLoggedIn = {this.changeLoggedIn.bind(this)}/> */}
        
        <div className="row">
            <div className="col-sm-12 main-container">
            {
              this.state.isLoggedIn ?
              <MainContainer 
                view = {this.state.view}
                isLoggedIn = {this.state.isLoggedIn}
                changeView = {this.changeView.bind(this)}
                students = {this.state.students} 
                teachers = {this.state.teachers} 
                addStudent = {this.addStudent.bind(this)}
                deleteStudent ={this.deleteStudent.bind(this)}
                addTeacher ={this.addTeacher.bind(this)}
                deleteTeacher ={this.deleteTeacher.bind(this)}
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
