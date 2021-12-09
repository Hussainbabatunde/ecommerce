import React from "react";
import Navbar from './Navbar';
import Bodytag from "./Bodytag";
import "./homepage.css";

function Homepage(){
    return(
        <div>        
        <div className="overall">
          <Navbar />
          <Bodytag />
        </div>
        </div>
    )
};

export default Homepage;