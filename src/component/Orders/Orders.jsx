import React, { useState } from 'react';
import Cart from '../cart/Cart';
import { useLoaderData } from 'react-router-dom';
import ReviewItem from '../ReviewItem/ReviewItem';
import './Orders.css';
import { removeFromDb } from '../../utilities/fakedb';

const Orders = () => {

    const savedCart = useLoaderData();
    const [cart, setCart] = useState (savedCart)
    // console.log(savedCart);
    // delete button handler function

    const handleRemoveFromCart = (id) =>{
        const remaining = cart.filter(product => product.id!== id);
        setCart(remaining);
        removeFromDb(id);
    }

    return (
       <div className='shop-container'>
        <div className='review-container'>

            {
                cart.map(product => <ReviewItem
                key ={product.id} product = {product} handleRemoveFromCart={handleRemoveFromCart}></ReviewItem>)
            }

            {/* <h2>Orders Page: {cart.length}</h2> */}
           
        </div>
        <div className='cart-container'>
            <Cart cart = {cart}></Cart>
        </div>
       </div>
        
    );
};

export default Orders;