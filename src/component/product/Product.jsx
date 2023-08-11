import React from 'react';
import './Product.css';

const Product = (props) => {
    // console.log(props.product);
    const {img, name, seller, ratings, quantity, price} = props.product;

    const handleAddCart = () =>{
        console.log('product-added');
    }
    return (
        <div className='product'>
            <img src={img} alt="" />
           <div className='product-info'>
           <h5 className='product-name'>{name}</h5>
            <p>Price: ${price}</p>
            <p>Manufacturer: {seller}</p>
            <p>Rating: {ratings} Stars</p>
           </div>
           <button onClick={handleAddCart} className='btn-cart'>Add to Cart </button>
        </div>
    );
};

export default Product;