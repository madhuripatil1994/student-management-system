import React from 'react';
import { addTeacher } from './../../Utils/loclstorage';

class AddTeacher extends React.Component {

    constructor(props){
        super(props)
    
        this.state = {
          teacher : {
            firstName: "",
            lastName: "",
            subject: ""
          }
        }
      }

    onChange(key, event) {
    
        var currentStudent = this.state.teacher;
          currentStudent[key] = event.currentTarget.value;
            this.setState({
              student: currentStudent
            })
      }

      addTeacher(){
   
        if(this.isValidTeacher(this.state.teacher.firstName, this.state.teacher.lastName))
        {
          addTeacher(this.state.teacher);
        } else {
          alert("Enter Details");
        }
      }
    
      isValidTeacher(firstName, lastName){
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
                    <label className="col-sm-2 col-form-label">Select Subject:</label>
                      <select className="col-sm-10  orm-control" id="sel1"  onChange ={this.onChange.bind(this,'subject')}>
                        <option selected="selected">Maths</option>
                        <option>Biology</option>
                      </select>
                    </div>
                    <div className="form-group row">
                      <div className="col-sm-10">
                        <button type="button" className="btn btn-primary" onClick ={this.addTeacher.bind(this)}>Add Teacher</button>
                      </div>
                    </div>
                  </form>
            </div>);
        }
}

export default AddTeacher;