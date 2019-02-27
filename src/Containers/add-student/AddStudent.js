import React from 'react';

class AddStudent extends React.Component {

        
  onChange = (event) => {
    console.log('events', event);
    // event.currentTarget.value 
  }


  render(){
      
      return(<div>
                <form>
                    <div className="form-group row">
                      <label className="col-sm-2 col-form-label">First Name</label>
                      <div className="col-sm-10">
                      <input type="text" className="form-control" id="exampleInputEmail1"  placeholder="Enter First Name"></input>
                      </div>
                    </div>
                    <div className="form-group row">
                      <label className="col-sm-2 col-form-label">Last Name</label>
                      <div className="col-sm-10">
                        <input type="text" className="form-control" id="inputPassword3" placeholder="Enter Last Name"></input>
                      </div>
                    </div>
                    <div className="form-group row">
                    <label for="sel1" className="col-sm-2 col-form-label">Select list:</label>
                      <select className="col-sm-10  orm-control" id="sel1" onChange={this.onChange}>
                        <option>10</option>
                        <option>12</option>
                      </select>
                    </div>
                    <div className="form-group row">
                    <label className="col-sm-2 col-form-label">Teacher</label>
                      <div className="col-sm-10">
                        <input type="text" className="form-control" id="inputPassword3" placeholder="Enter Teacher"></input>
                      </div>
                    </div>
                    <div className="form-group row">
                      <div className="col-sm-10">
                        <button type="submit" className="btn btn-primary">Add Student</button>
                      </div>
                    </div>
                  </form>
            </div>);
        }
}

export default AddStudent;