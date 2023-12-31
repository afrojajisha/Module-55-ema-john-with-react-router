import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

import './Product.css';

const Product = (props) => {
    // console.log(props);

    const {img, name, seller, ratings, quantity, price} = props.product;

    const handleAddCart = props.handleAddCart;

   
    return (
        <div className='product'>
            <img src={img} alt="" />
           <div className='product-info'>
           <h5 className='product-name'>{name}</h5>
            <p>Price: ${price}</p>
            <p>Manufacturer: {seller}</p>
            <p>Rating: {ratings} Stars</p>
           </div>
           <button onClick={()=> handleAddCart(props.product)} className='btn-cart'>Add to Cart <FontAwesomeIcon icon={faShoppingCart} /> </button>
        </div>
    );
};

export default Product;