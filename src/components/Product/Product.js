import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './product.css';

const Product = (props) => {
    console.log(props)
    const {img, name, seller, price, stock} = props.Product;
    return (
        <div className="product-item">
            <div className="product-img">
                <img src={img} alt=""/>
            </div>
            <div className="product-info">
                <h3 className="product-title" >{name}</h3>
                <br/>
                <p><small>{seller}</small></p>
                <h5>${price}</h5>
                <p><small>Only {stock} in stock -- Order soon</small></p>
                <button className="cart-btn" onClick={() => props.addProductHandler(props.Product)}><FontAwesomeIcon icon={faShoppingCart} />Add to cart</button>
            </div>
        </div>
    );
};

export default Product;