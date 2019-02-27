import React from 'react';

class Header extends React.Component {

    constructor(props){
        super(props);
    }

    changeView(view){
        console.log("Props:"+ this.props);
        this.props.changeView(view);
    }

    changeLoggedIn(isLoggedIn){
        console.log("Logged In:" + isLoggedIn);
        this.props.changeLoggedIn(isLoggedIn);
    }

    render(){
        return(
        <nav className="navbar navbar-expand-lg navbar-light navbar-dark bg-primary">
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav">
      <li className="nav-item active">
        <a className="nav-link" href="#">Student Management System <span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" onClick= {this.changeView.bind(this, 0)}>Add Student</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" onClick= {this.changeView.bind(this, 1)}>View Students</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" onClick= {this.changeView.bind(this, 2)}>Add Teacher</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" onClick= {this.changeView.bind(this, 3)}>View Teachers</a>
      </li>
      {
          this.props.isLoggedIn ?
          <li className="nav-item">
            <a className="nav-link" href="#" onClick= {this.changeLoggedIn.bind(this,false)}>log out</a>
        </li>  :
         <li className="nav-item">
            <a className="nav-link" href="#">login</a>
        </li>
      }
      
    </ul>
  </div>
</nav>
        )};

}

export default Header;