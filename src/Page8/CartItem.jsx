import React from 'react';
import './Cart.css';

const CartItem = ({ name, price, quantity, weight }) => {
    return (
        <div className="cart-item">
            <div className="item-info">
                <h3>{name}</h3>
                <p>Вес: {weight}</p>
                <p>Количество: {quantity}</p>
            </div>
            <div className="item-price">{price} ₽</div>
        </div>
    );
};

export default CartItem;