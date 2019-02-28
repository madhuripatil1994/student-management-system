import React from 'react';

class ViewStudents extends React.Component {

    constructor(props){
        super(props);
        console.log(this.props.students);
    }

    deleteStudent(index){
      this.props.deleteStudent(index);
    }

     render(){
       var that =this;
            return(<div>
        <table className="table">
  <thead className="thead-dark">
    <tr>
      <th scope="col">#</th>
      <th scope="col">First Name</th>
      <th scope="col">Last Name</th>
      <th scope="col">Class</th>
      <th scope="col">Teacher</th>
      <th scope="col">Delete</th>
      <th scope="col">View</th>
    </tr>
  </thead>
  <tbody>
    {
      this.props.students.map(function(student, index){
        return (
          <tr key ={index}>
      <th scope="row">{index}</th>
      <td>{student.firstName}</td>
      <td>{student.lastName}</td>
      <td>{student.class}</td>
      <td>{student.teacher}</td>
      <td>
      <button type="submit" className="btn btn-danger" onClick={that.deleteStudent.bind(that,index)}>Delete</button>
      </td>
      <td>
      <button type="submit" className="btn btn-primary">View</button>
      </td>
    </tr>
        )
      })
    }
    
  </tbody>
</table>
    </div>);
        }
}

export default ViewStudents;