import { getShoppingCart } from "../utilities/fakedb";

const cartProductsLoader = async () =>{
    const loadedProducts = await fetch ('products.json');
    const products = await loadedProducts.json();

    // if cart data is in database, you have to use async await

    const storedCart = getShoppingCart();
    const savedCard = [];

    console.log (storedCart);
    for(const id in storedCart){
        const addedProduct = products.find(pd => pd.id === id);
        if(addedProduct){
            const quantity = storedCart[id];
            addedProduct.quantity = quantity;
            savedCard.push(addedProduct);

        }
    }
    // *** Method 1
    // if you want to send two things return using array
    // return [products, savedCart]

    // *** Method 2
    // if you want to send two things return using object
     // return {products, savedCart}

    return savedCard;

}
export default cartProductsLoader;