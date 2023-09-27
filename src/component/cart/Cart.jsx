import React from 'react';
import './Cart.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faTrashAlt } from '@fortawesome/free-solid-svg-icons';

const Cart = ({cart, handleClearCart, children}) => {
    // option 1
    // const cart = props.cart; 
    // option 2
    // const {cart} = props;
    console.log(cart);

    let totalPrice = 0;
    let totalShipping = 0;
    let quantity = 0;
    for (const product of cart){
    // method -2 (if) easiar version to check product quantity, if product quntity  is zero it will set the quantity to one ***(this method is used jehetu primarily product quantity 0 te set kora thake tai  product.quanty diye gun korle shobgular man/value 0 hoye jabe)


        // if(product.quantity === 0){
        //     product.quantity = 1;
        // }

// method -1 (||1) easiar version to check product quantity, if product quntity  is zero it will set the quantity to one

        // product.quantity = product.quantity || 1;



        totalPrice = totalPrice + product.price * product.quantity;
        totalShipping = totalShipping + product.shipping * product.quantity;
        quantity = quantity + product.quantity;
    }

    const tax = totalPrice*7 /100;
    const grandTotal = totalPrice + totalShipping + tax;
   
    return (
        <div className='cart'>
            <h4>Order Summary </h4>
            <p>Selected Items: {quantity}</p>
            <p>Total Price: ${totalPrice}</p>
            <p>Total Shipping Charge: ${totalShipping}</p>
            <p>Tax: ${tax.toFixed(2)}</p>
            <h5>Grand Total: {grandTotal.toFixed(2)} </h5>
            <button onClick={handleClearCart} className='btn-clear-cart'><span>Clear Cart </span><FontAwesomeIcon  icon={faTrashAlt} /> </button>
    
            {children}
        </div>
    );
};

export default Cart;