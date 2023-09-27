import React, { useState } from 'react';
import Cart from '../cart/Cart';
import { Link, useLoaderData } from 'react-router-dom';
import ReviewItem from '../ReviewItem/ReviewItem';
import './Orders.css';
import { deleteShoppingCart, removeFromDb } from '../../utilities/fakedb';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons';

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

    const handleClearCart = () => {
        setCart([]);
        deleteShoppingCart();
    }

    return (
       <div className='shop-container'>
        <div className='review-container'>

            {
                cart.map(product => <ReviewItem
                key ={product.id} product = {product} handleRemoveFromCart={handleRemoveFromCart} ></ReviewItem>)
            }

            {/* <h2>Orders Page: {cart.length}</h2> */}
           
        </div>
        <div className='cart-container'>
            <Cart cart = {cart} handleClearCart={handleClearCart}>
            <Link to= "/orders" className='proceed-link'><button className='btn-proceed'>Proceed Checkout <FontAwesomeIcon  icon={faArrowAltCircleRight} /> </button></Link>
            </Cart>
        </div>
       </div>
        
    );
};

export default Orders;