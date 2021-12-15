import React, {useState}  from 'react';
import Shopnavbar from '../Shop/Shopnavbar';
import './Create.css';
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
    
        <div className ="login1">
            <div className = "login__header1">
                <h2>Sign Up</h2>
            </div>
                <form>
                <div className = "login__option11">
                    <input  value={email} onChange= {event => setEmail(event.target.value)} className = "login__email1" type = "text" placeholder="Email"/>
                </div>
                <div className = "login__option21"> 
                   <input   value={password} onChange= {event => setPassword(event.target.value)} className = "login__password1" type = "password" placeholder = "Password"/>
                </div>
                <div className = "login__option21"> 
                   <input   value={password} onChange= {event => setPassword(event.target.value)} className = "login__password1" type = "password" placeholder = "Re-enter Password"/>
                </div>
                
                <div className = "login__option41">
                    <button onClick={register} className = "login__createaccountbutton1" type = "submit">Create Account</button>
                </div>
                </form>
        </div>
        </div>
    )
}
export default Login;