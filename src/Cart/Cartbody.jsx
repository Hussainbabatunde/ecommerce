import React from 'react';
import CheckoutProduct from './CheckoutProduct';
import './cartbody.css';
import { useStateValue } from '../Shop/StateProvider';

function Cartbody(){
const [{basket}] = useStateValue();

    return (
        <div>
            {basket?.length === 0  ? (
                <div>
                    <h1 className='justshow'>Your basket is empty</h1>
                </div>
            ) : (
                <div>
                                        {basket.map( item => (
                        <CheckoutProduct
                        id={item.id}
                        title={item.title}
                        image={item.image}
                        price={item.price}
                        />
                    ) )}
                </div>
            )}
        </div>
    );
}

export default Cartbody;