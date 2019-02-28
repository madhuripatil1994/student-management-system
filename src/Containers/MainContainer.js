import React from 'react';

import AddStudent from './add-student/AddStudent';
import ViewStudents from './view-students/ViewStudents';
import AddTeacher from './add-teacher/AddTeacher';
import ViewTeachers from './view-teachers/ViewTeachers';
import SignIn from './sign-in/SignIn';


class MainContainer extends React.Component {

    constructor(props){
        super(props);
    }

    render(){
        return(
           
            <div>
                    {
                        this.props.view == 0 && 
                        <AddStudent 
                        addStudent = {this.props.addStudent}
                        changeView = {this.props.changeView}/> 
                    }

                    {
                        this.props.view == 1 && 
                        <ViewStudents 
                        students = {this.props.students}
                        /> 
                    }  

                    {
                        this.props.view == 2 && 
                        <AddTeacher />
                    }         
                    {
                        this.props.view == 3 && 
                        <ViewTeachers />
                    }
            </div>
        );
    }
}

export default MainContainer;