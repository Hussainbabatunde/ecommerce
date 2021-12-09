import React  from 'react';
import './login.css';
function Login() {
  
  
    return (
        < div className ="login">
            <div className = "login__header">
                <h2>Sign In</h2>
            </div>
            
                <div className = "login__option1">
                    <input  className = "login__email" type = "text" placeholder="Email"/>
                </div>
                <div className = "login__option2"> 
                   <input   className = "login__password" type = "password" placeholder = "Password"/>
                </div>
                <div> 
                </div>
                <div className = "login__option3">
                    <button  className = "login__button" type = "submit">Login</button>
                </div>
                
                <div className = "login__forgotpassword">
                   <p>forgot password?</p>
                </div>
                
                <div className = "login__option4">
                    <button className = "login__createaccountbutton" type = "submit">Create Account</button>
                </div>
                
        </div>
    )
}
export default Login;