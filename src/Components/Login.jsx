import React, {Component} from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import WelcomeComponent from './WelcomeComponent'
import DepartmentList from './Department/DepartmentComponent'
import HeaderComponent from './HeaderComponent'
import EditDepartment from './Department/EditDepartment'
import StudentComponent from './Students/StudentComponent'
import EditStudent from './Students/EditStudent'

class StudentDB extends Component{
    render(){
    return (
      <div className="StudentDB">
          <Router>
              <>
              <HeaderComponent></HeaderComponent>
                <Switch>
                    <Route path="/" exact component={Login}></Route>
                    <Route path="/login" component={Login}></Route>
                    <Route path="/welcome/:name" component={WelcomeComponent}></Route>
                    <Route path="/students" component={StudentComponent}></Route>
                    <Route path="/editStudent" component={EditStudent}></Route>
                    <Route path="/departments" component={DepartmentList}></Route>
                    <Route path="/department/:id" component={EditDepartment}></Route>
                    <Route path="" component={ErrorComponent}></Route>
                </Switch>
              </>
          </Router>
      </div> 
    );
  }
}

function ErrorComponent(){
    return <div>Hey Something went wrong! Check out your URL</div>
}

class Login extends Component{
    constructor(props){
        super(props)
        this.state={
            username:'',
            password:'',
            showMessage:'',
            hasLoginFailed:''
        }
        this.loginClicked = this.loginClicked.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    loginClicked(){
        if((this.state.username==="Suchi") && (this.state.password==="udemy")){
            console.log("Login Clicked");
            this.props.history.push(`/welcome/${this.state.username}`)
            this.setState({
                
                hasLoginFailed:false,
                showMessage:true
            })
        }else{
            this.setState({
                hasLoginFailed:true,
                showMessage:false
            })
            console.log("Login Failed");}
    }

    handleChange(event){
        console.log(event.target.value)
        this.setState({
           [event.target.name]:event.target.value
        })
    }

    render(){
        return(
            <div className="Login">
                { this.state.hasLoginFailed && <div>Invalid Credentials</div> }
                { this.state.showMessage && <div>Login Successfull</div> }

                User Name: <input type="text" name="username" value={this.state.username} onChange={this.handleChange}/>
                Password: <input type="password" name="password" value={this.state.password} onChange={this.handleChange}/>

                <button onClick={this.loginClicked}>login</button>
            </div>
        );
    }
}

export default StudentDB