import React, { useEffect, useState } from 'react';
import './Shop.css';
import Product from '../product/Product';
import Cart from '../cart/Cart';
import { addToDb, deleteShoppingCart, getShoppingCart } from '../../utilities/fakedb';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCreditCard} from '@fortawesome/free-solid-svg-icons';


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
        // below code is for complex solution

        let newCart =[];
        

                // const newCart = [...cart, product]; (***this two line is fine if we use easier method )
                // setCart(newCart);

        // if product doesn't exist in the cart, then set quantity=1
        // if exist update the quantity by 1

        const exists = cart.find(pd => pd.id === product.id);
        if(!exists){
            product.quantity = 1;
            newCart = [...cart, product]
        }
        else{
            exists.quantity = exists.quantity +1;
            const remaining = cart.filter (pd => pd.id !== product.id);
            newCart =[...remaining, exists];
        }

        setCart(newCart);
        // to add cart items in localstorage
        addToDb(product.id);
    }

    const handleClearCart = () =>{
        setCart ([]);
        deleteShoppingCart();
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
                   
            <Cart cart={cart} handleClearCart={handleClearCart}>
                <Link to= "/orders" className='proceed-link'><button className='btn-proceed'>Review Order <FontAwesomeIcon  icon={faCreditCard} /> </button></Link>
            </Cart>
                
            </div>
        </div>
    );
};

export default Shop;