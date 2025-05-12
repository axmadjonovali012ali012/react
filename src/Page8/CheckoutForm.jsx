import React from 'react';
import './Cart.css';

const CheckoutForm = () => {
  return (
    <div className="checkout-form">
      <h2>ОФОРМЛЕНИЕ ЗАКАЗА</h2>
      <form>
        <div className="form-group">
          <label>Контактное лицо</label>
          <input type="text" placeholder="Дмитрий" />
        </div>
        <div className="form-group">
          <label>Телефон</label>
          <input type="text" placeholder="+7 (925) 207-22-21" />
        </div>
        <div className="form-group">
          <label>Комментарий к заказу</label>
          <textarea placeholder="Комментарий"></textarea>
        </div>
        <div className="form-group">
          <label>Способ оплаты</label>
          <div className="radio-group">
            <label><input type="radio" name="pay" /> В офисе</label>
            <label><input type="radio" name="pay" /> Онлайн</label>
          </div>
        </div>
        <div className="form-group">
          <label><input type="checkbox" /> Юридическое лицо</label>
        </div>
        <button type="submit" className="submit-button">Оформить заказ</button>
      </form>
    </div>
  );
};

export default CheckoutForm;