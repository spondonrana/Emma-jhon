import React from 'react';
import './Product.css'

const Product = ({product,handAddToCart}) => {
    // const {product,handAddToCart} = props;

    const {name, img, seller, price, ratings} = product;
   

    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='product-info'>
                <p className='product-name'>{name}</p>
            <p>Price: ${price}</p>
            <p><small>Seller: {seller}</small></p>
            <p><small>Ratings: {ratings}</small></p>
            </div>
            <button onClick={() => handAddToCart(product)} className='btn-cart'><p>Add to cart</p></button>
        </div>
    );
};

export default Product;<h2>This is product</h2>