import React from 'react';

class ViewStudents extends React.Component {

    constructor(props){
        super(props);
        console.log(this.props.students);
    }
     render(){
            return(<div>
    {
        this.props.students != null ?
        <table className="table">
  <thead className="thead-dark">
    <tr>
      <th scope="col">#</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Handle</th>
      <th scope="col">Delete</th>
      <th scope="col">View</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
      <td>
      <button type="submit" className="btn btn-danger">Delete</button>
      </td>
      <td>
      <button type="submit" className="btn btn-primary">View</button>
      </td>
    </tr>
  </tbody>
</table> :
    <div>Data not avialable</div>
    }
    </div>);
        }
}

export default ViewStudents;