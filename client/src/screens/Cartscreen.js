import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {addToCart} from '../actions/cartActions';
import {deleteFromCart} from '../actions/cartActions';
import Checkout from '../components/Checkout';

export default function Cartscreen() {

    const cartstate = useSelector(state=>state.cartReducer)
    const cartItems = cartstate.cartItems
    let subtotal = cartItems.reduce((x, item)=> x+item.price, 0)
    const dispatch = useDispatch()

    return ( 
        <div>
            <div className='row justify-content-center'>
                <div className='col-md-6'>
                    <h2 style={{fontSize: '20px'}}>My Cart</h2>

                    {cartItems.map(Item => {
                        
                        return <div className="flex-container">

                        <div className='text-left m-1 w-100'>
                            <h1>{Item.name} [{Item.variant}]</h1>
                            <h1>Price: {Item.quantity} * {Item.prices[0][Item.variant]} = {Item.price}</h1>
                            <h1 style={{display: 'inline'}}>Quantity:</h1>
                            <i className="fa fa-plus" aria-hidden="true" onClick={()=>{dispatch(addToCart(Item, Item.quantity+1, Item.variant))}}></i>
                            <b>{Item.quantity}</b>
                            <i className="fa fa-minus" aria-hidden="true" onClick={()=>{dispatch(addToCart(Item, Item.quantity-1, Item.variant))}}></i>
                            <hr />
                        </div>

                        <div className='m-1 w-100'> 
                            <img src={Item.image} style={{height: "80px", width: "80px"}} />
                        </div>

                        <div className='m-1 w-100'>
                        <i className="fa fa-trash mt-5" aria-hidden="true" onClick={()=>{dispatch(deleteFromCart(Item))}}></i>
                        </div>


                    </div>

                    })}
                    
                    </div>

                <div className='col-md-4 text-end'>
                    <h2 style={{fontSize: '30px'}}>SubTotal : {subtotal} EUR/-</h2>
                    <Checkout subtotal={subtotal} />
                </div>
            </div>
        </div>
     )
}

