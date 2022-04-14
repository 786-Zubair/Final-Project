import React from 'react';
import {useDispatch} from 'react-redux';
import StripeCheckout from 'react-stripe-checkout';
import { placeOrder } from '../actions/orderActions';



export default function Checkout({subtotal}) {

    const dispatch = useDispatch();

    function tokenHandler(token) {
        console.log(token);
        dispatch(placeOrder(token, subtotal))
    }


    return ( 
        <div>
            <StripeCheckout

            amount={subtotal}
            shippingAddress
            token={tokenHandler}
            stripeKey='pk_test_51KnMWsITdJ91MlzmbW9821SSB8QwYOsxTTuIvzEfTRdOGOn28qdyXcYC4xLtFmWtcUoe23ridSRtxup6wrnmZU3o00A0kPTcTF'
            currency='ALL'
            >
                <button className='btn'> 
                    Pay Now
                </button>

            </StripeCheckout>
        </div>
     );
}

 