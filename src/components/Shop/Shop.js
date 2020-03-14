import React, { useState } from 'react';
import fakeData from '../../fakeData';
import './Shop.css';
import Product from '../Product/Product';
import Cart from '../Cart/Cart';

const Shop = () => {
    const frist10 = fakeData.slice(0, 10);
    const [products, setProducta ] = useState(frist10);
    const [cart, setCart] = useState([]);

    const addProductHandler = (product) => {
        console.log('add a product', product ); 
        const newCart = [...cart, product];
        setCart(newCart);
    }

    return (
        <div className="shop-container">
            <div className="product-container">
                {
                    products.map(pd => <Product Product={pd} addProductHandler={addProductHandler}></Product>)
                }
            </div>
            <div className="cart-container">
              <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};
export default Shop;