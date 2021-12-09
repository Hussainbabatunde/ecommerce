import React from 'react';
import './shopbody.css';
import Audioplayer from './Audioplayer';
import {useStateValue} from '../Shop/StateProvider';


function Shopbody(props){
    const [{}, dispatch] = useStateValue();

    const addToBasket = () => {
        dispatch({
            type: 'ADD_TO_BASKET',
            item: { 
                id: props.id,
                title: props.title,
                image: props.image,
                price: props.price ,
            }
        })
    }

    return (
        <div>
        <div className="containerbody">        
            <img src={props.image} className='discimage1'/>
            <div className="container">
            <p className='price'>{props.price}</p>
            <p className='nameofit'>{props.title}</p>
            <p className="different"><span className="Spanly">Deep House</span><span className="Spanly">123-156 BPM</span><span className="Spanly">184 MB</span></p>
            <p className="packed">{props.about}</p>
            <Audioplayer music1={props.music}/>
            <button onClick={addToBasket} className='cartbutton'>ADD TO CART - {props.price}</button>
        </div>
        </div>
        </div>
    );
}

export default Shopbody;