import React from 'react';
import './CheckoutProduct.css';
import {useStateValue} from '../Shop/StateProvider';

function CheckoutProduct(props){

    const [{}, dispatch] = useStateValue();

    console.log(props.id, props.image, props.title);
    const removefrombasket = () => {
        dispatch({
            type:'REMOVE_FROM_BASKET',
            id: props.id,
        })   
    }

    return (
        <div className="checkoutproduct">
            <img src={props.image} alt='' className='checkout_image'/>

            <div className='checkoutinfo'>
                <h3 className='checkout_title'>{props.title}</h3>
                <p className='checkout_price'><strong>{props.price}</strong></p>
                <button className='remove' onClick={removefrombasket}>REMOVE FROM CART</button>
            </div>
        </div>
    );
}

export default CheckoutProduct;