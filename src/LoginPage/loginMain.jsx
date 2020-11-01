import React,{ Component } from 'react';
import './logincss.css';
import ForgotPsw from './forgotPsw';
class LoginMain extends Component{
    state={
          name:"ABC",
          password:"Abcdhhhh6%",
          givenName:"",
          givenPassword:""
          }
                   submitHandler=()=>{
                       const psw=/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/
                        if(this.state.name===this.state.givenName && this.state.password===this.state.givenPassword&& 
                            this.state.givenPassword.match(psw))
                   {
                             alert("login success");
                       }
                       else{
                           alert("login failed");
                       }
                        }
                   handleUsername=e=>{
                    console.log(e.target.value);
                    this.setState({givenName:e.target.value});
                   }
                   handlePassword=e=>{
                    console.log(e.target.value);
                     this.setState({givenPassword:e.target.value});
                                  }
                    forgotPsw=(e)=>{
                        alert("Give us your Username:-----")
                    }
        render(){
        return (<>
            <h2>Login Form</h2>

<form onSubmit={this.submitHandler} >
  

  <div className="container">
    <label ><b>Username</b></label>
    <input type="text" placeholder="Enter Username" name="uname" required onChange={this.handleUsername}/>

    <label ><b>Password</b></label>
    <input type="password" placeholder="Enter Password" name="psw" required onChange={this.handlePassword} />
        
    <button type="submit">Login</button>
    <label>
      <input type="checkbox" name="remember"/> Remember me
    </label>
    <div className="container" style={{backgroundColor:"#f1f1f1"}}>
    <button type="button" className="cancelbtn" >Cancel</button>
 <a href="#" onClick={this.forgotPsw}>   <span className="psw" >Forgot Password?</span></a>
  </div>
  </div>
  
</form></>

        )
    }

}
export default LoginMain;
