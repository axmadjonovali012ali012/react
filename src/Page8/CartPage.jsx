import React from 'react';
import CartItem from './CartItem';
import RecommendedItems from './RecommendedItems';
import CheckoutForm from './CheckoutForm';
import OrderSummary from './OrderSummary';
import './Cart.css';

const CartPage = () => {
    return (
        <div className="cart-container">
            <h1>КОРЗИНА</h1>
            <div className="cart-content">
                <div className="cart-items">
                    <CartItem name="Клей для блоков летний" price={3200} quantity={1} weight="25 кг" />
                    <CartItem name="Облицовочный кирпич" price={12800} quantity={2} weight="240x60x60 мм" />
                    <CartItem name="Газобетон 60x30x20 см" price={6800} quantity={1} weight="0.036 м3" />
                    <CartItem name="Пескобетон М100" price={1325} quantity={1} weight="25 кг" />
                </div>
                <OrderSummary total={36125} discount={0} />
            </div>
            <RecommendedItems />
            <CheckoutForm />
        </div>
    );
};

export default CartPage;