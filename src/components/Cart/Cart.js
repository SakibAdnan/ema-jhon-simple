import React from 'react';
import './Cart,css';
const Cart = (props) => {
    const cart = props.cart
    let total = 0;
    for(let i=0; i< cart.length; i++){
        const product = cart[i];
        total = total + product.price;
    }
    const tex = total / 10;

    const formetNumber = num =>{
        const presicion = num.toFixed(2);
        return Number(presicion);
    }
    return (
        <div>
            <h3>Order Summary</h3>
            <p>Order Items: {cart.length}</p>
            <p>cart total {formetNumber(total + tex)}</p>
            <p>VAT {formetNumber(tex)}</p>
        </div>
    );
};

export default Cart;