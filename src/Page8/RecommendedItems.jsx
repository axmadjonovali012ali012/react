import React from 'react';
import './Cart.css';

const items = [
  { name: 'Полистиролбетон', price: 6600 },
  { name: 'Газобетон', price: 6950 },
  { name: 'Облицовочный кирпич', price: 7200 },
  { name: 'Пескоблок', price: 7600 },
  { name: 'Полнотелый кирпич', price: 8500 },
];

const RecommendedItems = () => {
  return (
    <div className="recommended">
      <h2>Вместе с этими товарами заказывают</h2>
      <div className="recommended-list">
        {items.map((item, index) => (
          <div key={index} className="recommended-item">
            <p>{item.name}</p>
            <p>от {item.price} ₽</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecommendedItems;
