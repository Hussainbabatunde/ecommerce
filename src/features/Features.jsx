import React from "react";
import Navbar from '../Shop/Shopnavbar';
import './features.css';
import Featuresbody from './featuresbody';

function Features(){
    return(
        <div className='features'>
            <Navbar />
            <Featuresbody />
        </div>
    )
}

export default Features;