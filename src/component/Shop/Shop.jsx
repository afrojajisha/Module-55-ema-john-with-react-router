import React, { useEffect, useState } from 'react';
import './Shop.css';
import Product from '../product/Product';
import Cart from '../cart/Cart';
import { addToDb, getShoppingCart } from '../../utilities/fakedb';


const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(()=>{
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    }, []);

    useEffect(()=>{
        const storedCart = getShoppingCart();
        // after getting each card from below logic product will be pushed in the empty array
        const savedCart = [];

        // step 1: get id of the addedProduct
        for (const id in storedCart){
            // console.log(id);
            // step 2: get the product using id
            const addedProduct = products.find(product => product.id === id)

            if(addedProduct){
                 // step 3: add qauntity of the product

                 const quantity = storedCart[id];
                 addedProduct.quantity = quantity;

                //  step 4: add the addedProduct to the savedCart (empty array)
                 savedCart.push(addedProduct);
            }

            // Here below part 
            // step 3: get qauntity of the product

            // const quantity = storedCart[id];
            // console.log(quantity);
            // addedProduct.quantity = quantity;
            // console.log(addedProduct);


        }
        setCart(savedCart);
        
    }, [products])
    

    const handleAddCart = (product) =>{
        // cart.push(product);
        const newCart = [...cart, product];
        setCart(newCart);

        // to add cart items in localstorage
        addToDb(product.id);
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