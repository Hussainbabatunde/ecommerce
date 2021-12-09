import React from "react";
import imagetop from "./imagetop1.png";
import {Link} from 'react-router-dom';
import "./Shopnavbar1.css";
import {useStateValue} from '../Shop/StateProvider';
import { auth } from "../features/firbase";



function Navbar(){
    const [{basket, user}]= useStateValue();
    const login = () => {
        if (user) {
            auth.signOut();
        }
    }


    return(
        <div>
          <nav>
              <Link to='/home'><img src={imagetop} className="classimage1"/></Link>
              <div className="loginside1">
                  <ul>
                  
                  <Link to='/shop'><li>Shop</li></Link>
                      <Link to={!user && '/'}><li>Login</li></Link>
                      <Link to='/cart'><li>Cart <span className="spanvalue1">{basket?.length}</span></li></Link>
                      <div className="loginscope1">
                      <span>Hello {user?.email} </span>
                      <Link to={!user && '/'}><span onClick={login} className="link1">{user ? 'Sign Out' : 'Sign In'}</span></Link>
                      </div>
                      </ul>
              </div>
              
          </nav> 
        </div>
    )
}; 

export default Navbar;