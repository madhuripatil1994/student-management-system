import React from 'react';
import {getTeacherById} from './../../Utils/loclstorage'

class TeacherDetails extends React.Component {

    constructor(props){

        super(props);
        this.state ={
            teacher :{}
        }
    }
    componentWillMount(){
        var teacher = getTeacherById(this.props.match.params.id);
        this.setState({
            teacher
        })
        console.log(teacher);
    }

    redirectView(){
        this.props.history.push("/edit-teacher" + this.props.match.params.id);
    }
    render(){
        return(<div>
                  <form>
                      <div className="form-group row">
                        <label className="col-sm-2 col-form-label">First Name:</label>
                        <label className="col-sm-2 col-form-label">{this.state.teacher.firstName}</label>
                      </div>
                      <div className="form-group row">
                        <label className="col-sm-2 col-form-label">Last Name:</label>
                        <label className="col-sm-2 col-form-label">{this.state.teacher.lastName}</label>
                      </div>
                      <div className="form-group row">
                        <label className="col-sm-2 col-form-label">Class:</label>
                        <label className="col-sm-2 col-form-label">{this.state.teacher.subject}</label>
                      </div>
                      <div className="form-group row">
                        <div className="col-sm-4">
                          <button type="button" className="btn btn-primary" onClick = {this.redirectView.bind(this)}>Edit</button>
                        </div>
                      </div>
                    </form>
              </div>);
          }
}

export default TeacherDetails;