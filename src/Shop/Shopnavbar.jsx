import React from "react";
import imagetop from "./imagetop1.png";
import {Link} from 'react-router-dom';
import "./Shopnavbar1.css";
import {useStateValue} from '../Shop/StateProvider';

function Navbar(){
    const [{basket}]= useStateValue();
    console.log(basket );

    return(
        <div>
          <nav>
              <Link to='/'><img src={imagetop} className="classimage1"/></Link>
              <div className="loginside1">
                  <ul>
                  <Link to='/shop'><li>Shop</li></Link>
                      <Link to='/login'><li>Login</li></Link>
                      <Link to='/cart'><li>Cart <span className="spanvalue1">{basket?.length}</span></li></Link>
                  </ul>
              </div>
          </nav> 
        </div>
    )
}; 

export default Navbar;