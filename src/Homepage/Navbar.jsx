import React from "react";
import imagetop from "./imagetop1.png";
import {Link} from 'react-router-dom';
import "./navbar.css";
import {useStateValue} from '../Shop/StateProvider';

function Navbar(){
    const [{basket}] = useStateValue();

    return(
        <div>
          <nav>
              <Link to='/'><img src={imagetop} className="classimage"/></Link>
              
              <div className="loginside">
                  <ul>
                  <Link to='/shop'><li>Shop</li></Link>
                  <Link to='/login'><li>Login</li></Link>
                      <Link to='/cart'><li>Cart <span className="spanvalue">{basket.length}</span></li></Link>
                  </ul>
              </div>
          </nav> 
        </div>
    )
};

export default Navbar;