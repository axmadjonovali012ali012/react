import React from 'react';
import './Cart.css';

const OrderSummary = ({ total, discount }) => {
  const finalPrice = total - discount;

  return (
    <div className="order-summary">
      <h3>Ваша корзина</h3>
      <p>Товаров: 4</p>
      <p>Скидка: {discount} ₽</p>
      <p>Итого: {finalPrice} ₽</p>
      <button className="checkout-button">Перейти к оформлению</button>
    </div>
  );
};

export default OrderSummary;
