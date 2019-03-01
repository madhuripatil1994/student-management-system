import React from 'react';

import AddStudent from './add-student/AddStudent';
import ViewStudents from './view-students/ViewStudents';
import AddTeacher from './add-teacher/AddTeacher';
import ViewTeachers from './view-teachers/ViewTeachers';
import TeacherDetails from './teacher-details/TeacherDetails';
import EditTeacher from './edit-teacher/EditTeacher';
import SignIn from './sign-in/SignIn';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Header from './../Components/Header'

class MainContainer extends React.Component {

    constructor(props){
        super(props);
    }

    render(){
        return(
            <Router>
                <div>
                    <Header />
                    <Route path="/add-student" component={AddStudent}></Route>
                    <Route path="/view-student" component={ViewStudents}></Route>
                    <Route path="/add-teacher" component={AddTeacher}></Route>
                    <Route path="/view-teacher" component={ViewTeachers}></Route>
                    <Route path="/teacher/:id" component={TeacherDetails}></Route>
                    <Route path="/edit-teacher/:id" component={EditTeacher}></Route>
                </div>
            </Router>
           
                    
            
        );
    }
}

export default MainContainer;