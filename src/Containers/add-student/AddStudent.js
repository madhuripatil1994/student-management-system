import React from 'react';

class AddStudent extends React.Component {

  constructor(props){
    super(props)

    this.state = {
      student : {
        firstName: null,
        lastName: null,
        class: null,
        teacher: null
      }
    }
  }
        
  /*onChange = (event) => {
    console.log('events', event);
    // event.currentTarget.value 
  }*/

  onChange(key, event) {
    
    var currentStudent = this.state.student;
      currentStudent[key] = event.currentTarget.value;
        this.setState({
          student: currentStudent
        })
  }

  addStudent(){
   
    if(this.isValidstudent(this.state.student.firstName, this.state.student.lastName)){
      this.props.addStudent(this.state.student);
      this.props.changeView(1);
    } else {
      alert("Enter Details");
    }
  }

  isValidstudent(firstName, lastName){
    if(firstName != null && lastName !=null){
      return true;
    }
    return false;
  }

  render(){
      
      return(<div>
                <form>
                    <div className="form-group row">
                      <label className="col-sm-2 col-form-label">First Name</label>
                      <div className="col-sm-10">
                      <input type="text" className="form-control" id="exampleInputEmail1"  placeholder="Enter First Name"
                        onChange ={this.onChange.bind(this,'firstName')}></input>
                      </div>
                    </div>
                    <div className="form-group row">
                      <label className="col-sm-2 col-form-label">Last Name</label>
                      <div className="col-sm-10">
                        <input type="text" className="form-control" id="inputPassword3" placeholder="Enter Last Name"
                         onChange ={this.onChange.bind(this, 'lastName')}></input>
                      </div>
                    </div>
                    <div className="form-group row">
                    <label className="col-sm-2 col-form-label">Select Class:</label>
                      <select className="col-sm-10  orm-control" id="sel1"  onChange ={this.onChange.bind(this,'class')}>
                        <option>10</option>
                        <option>12</option>
                      </select>
                    </div>
                    <div className="form-group row">
                    <label className="col-sm-2 col-form-label">Teacher</label>
                      <div className="col-sm-10">
                        <input type="text" className="form-control" id="inputPassword3" placeholder="Enter Teacher"
                        onChange = {this.onChange.bind(this,'teacher')}></input>
                      </div>
                    </div>
                    <div className="form-group row">
                      <div className="col-sm-10">
                        <button type="submit" className="btn btn-primary" onClick ={this.addStudent.bind(this)}>Add Student</button>
                      </div>
                    </div>
                  </form>
            </div>);
        }
}

export default AddStudent;