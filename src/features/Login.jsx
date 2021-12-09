import React, {useState}  from 'react';
import Shopnavbar from '../Shop/Shopnavbar';
import './login.css';
import { Link , useNavigate } from "react-router-dom";
import { getAuth, createUserWithEmailAndPassword ,signInWithEmailAndPassword} from "firebase/auth";
import { useStateValue } from "../Shop/StateProvider";
import {auth} from './firbase';

function Login() {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    
    const login = (event) => {
        

        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
        .then((auth) => {
            navigate("/home")
        })
        .catch((event) => alert(event.message));

        event.preventDefault();
    }

    const register = (event) => {
       

        
        const auth = getAuth();
        createUserWithEmailAndPassword(auth,email, password)
        .then((auth) => {
            navigate("/home")
        })
        .catch((event) => alert(event.message));
        event.preventDefault();
    }
  
    return (<div>
    <Shopnavbar />
        <div className ="login">
            <div className = "login__header">
                <h2>Sign In</h2>
            </div>
                <form>
                <div className = "login__option1">
                    <input  value={email} onChange= {event => setEmail(event.target.value)} className = "login__email" type = "text" placeholder="Email"/>
                </div>
                <div className = "login__option2"> 
                   <input   value={password} onChange= {event => setPassword(event.target.value)} className = "login__password" type = "password" placeholder = "Password"/>
                </div>
                <div> 
                </div>
                <div className = "login__option3">
                    <button  onClick={login} className = "login__button" type = "submit">Login</button>
                </div>
                
                <div className = "login__forgotpassword">
                   <p>forgot password?</p>
                </div>
                
                <div className = "login__option4">
                    <button onClick={register} className = "login__createaccountbutton" type = "submit">Create Account</button>
                </div>
                </form>
        </div>
        </div>
    )
}
export default Login;