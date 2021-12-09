import React from 'react';
import Shopnavbar from './Shopnavbar';
import Shopbody from './Shopbody';
import './shop.css';
import shopimage1 from './shopimage1.jpg';
import shopimage2 from './dunsin.png';
import shopimage3 from './maverick.png';
import shopimage4 from './teni.png';
import grenade1 from './grenade.mp3';
import yah from './yah.mp3';
import maverick from './maverick.mp3';
import teni from './teni.mp3';


function Shop(){
    return (
        <div className="showing">
            <Shopnavbar />
            <Shopbody id={1} image={shopimage1} music={grenade1} price='$19.99' title='GRENADE BY BRUNO MARS' about='Packed with shuffling drums, lo-fi grooves, retro synths and effortless baselines. 90s Deep House provides an essential throwback to the origins of house music from the yesteryear.' />
            <Shopbody id={2} image={shopimage2} music={yah} price='$100.00' title='YAH BY DUNSIN OYEKAN' about='A gospel song inspired by the holy spirit, beautiful instrumentals. Released last year 2020, it has inspired lifes and added joy.'/>
            <Shopbody id={3} image={shopimage3} music={maverick} price='$80.55' title='JIREH BY MAVERICK MUSIC' about='A beautiful gospel song describing Gods all sufficiency and provision.'/>
            <Shopbody id={4} image={shopimage4} music={teni} price='$50.25' title='HUSTLE BY TENI' about='Describing the struggle of an average nigerian Teni makanaki pours out her heart in this song which speaks volume and is relateable.'/>
        </div>
    );
}

export default Shop;