import React, { useEffect, useState } from 'react';
import { addToDb, getStoreCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([])

    useEffect( () => {
        // console.log('Products load before fetch');
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    }, [])


    useEffect( () => {
        // console.log('local storage first line');
        const storeCart = getStoreCart();
        const saveCart = [];
        for(const id in storeCart){
           const addedProduct = products.find(product => product.id === id);
           if(addedProduct){
               const quantity = storeCart[id];
               addedProduct.quantity = quantity;
               saveCart.push(addedProduct);
           }
        }

        setCart(saveCart);
    }, [products])
    const handAddToCart = (selectedProduct) =>{
        let newCart =[];
        const exists = cart.find(product => product.id === selectedProduct.id);
        if(!exists){
            selectedProduct.quantity=1;
            newCart = [...cart, selectedProduct ]
        }else{
            const rest = cart.filter(product => product.id !== selectedProduct);
            exists.quantity = exists.quantity + 1;
            newCart = [...rest, exists];
        }
        // cart.push(product)
        // const newCart = [...cart, selectedProduct];
        setCart(newCart);
        addToDb(selectedProduct.id)
    }
    return (
        <div className='shop-container'>
            <div className="products-container">
                {
                    products.map(product => <Product 
                        key={product.id}
                        product={product}
                        handAddToCart={handAddToCart}
                        ></Product>)
                }
            </div>
            <div className="cart-container">
            <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;