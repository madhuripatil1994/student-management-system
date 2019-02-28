import React from 'react';

class ViewTeachers extends React.Component {

    constructor(props){
        super(props);
    }

    deleteTeacher(index){
      this.props.deleteTeacher(index);
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
      <th scope="col">Subject</th>
      <th scope="col">Delete</th>
      <th scope="col">View</th>
    </tr>
  </thead>
  <tbody>
    {
      this.props.teachers.map(function(teacher, index){
        return (
          <tr key ={index}>
      <th scope="row">{index}</th>
      <td>{teacher.firstName}</td>
      <td>{teacher.lastName}</td>
      <td>{teacher.subject}</td>
      <td>
      <button type="submit" className="btn btn-danger" onClick={that.deleteTeacher.bind(that,index)}>Delete</button>
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

export default ViewTeachers;