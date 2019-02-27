import React from 'react';

class SignIn extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            email : '',
            password : ''
        };
    }

    onChange(key, event){
        this.setState(
            {
               [key] :event.currentTarget.value
            }
        );
    }

    changeLoggedIn(isLoggedIn){
        console.log("Logged In:" + isLoggedIn);

        if(this.isValidEmail(this.state.email,this.state.password)){
            this.props.changeLoggedIn(isLoggedIn);
        } else {
            alert("Unauthroized user");
        }
        
    }

    isValidEmail(email, password){
        if(email == 'madhuri' && password == 'mad') {
            return true;
        }
        else
            return false;
    }

    render(){
        return(
        <div>
        <form>
        <div className="form-group">
            <label >Email address</label>
            <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"
            onChange = {this.onChange.bind(this,'email')}></input>
        </div>
        <div className="form-group">
            <label >Password</label>
            <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"
            onChange = {this.onChange.bind(this,'password')}></input>
        </div>
        <button type="submit" className="btn btn-primary" onClick={this.changeLoggedIn.bind(this,true)}>Submit</button>
        </form>
        </div>
        )
        
    }
}

export default SignIn;