import React, { useEffect, useState } from 'react';
import './Shop.css';
import Product from '../product/Product';
import Cart from '../cart/Cart';


const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(()=>{
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    }, []);

    

    const handleAddCart = (product) =>{
        // cart.push(product);
        const newCart = [...cart, product];
        setCart(newCart);
    }

    return (
        <div className='shop-container'>
        <div className="products-container">
            {
                products.map(product =><Product 
                    key={product.id} 
                    product={product}
                    handleAddCart={handleAddCart}></Product>)
            }
            </div>
        <div className="cart-container">
                   
            <Cart cart={cart}></Cart>
                
            </div>
        </div>
    );
};

export default Shop;