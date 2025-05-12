import React, { useState } from 'react';
import './CuestionForm.css';
import questionMark from '../assets/question.png';

const KuestionForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.phone || !formData.email || !formData.message) {
      alert('Заполните поля ввода!');
      return; 
    }


    console.log('Yuborilgan malumot:', formData);

    setFormData({
      name: '',
      phone: '',
      email: '',
      message: '',
    });
  };

  return (
    <div className="question-container">
      <div className="question-box">
        <img src={questionMark} alt="?" className="question-mark" />
        <h2>ЗАДАТЬ ВОПРОС</h2>
        <p>
          Есть, о чём спросить? Просто напишите нам! Специалисты "Фабрики Бетонов" ответят Вам в течение часа.
          Задайте ваш вопрос или кратко опишите ситуацию. Мы очень быстро свяжемся с вами ;)
        </p>

        <form onSubmit={handleSubmit}>
          <div className="input-row">
            <input
              type="text"
              placeholder="Имя"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
            <input
              type="text"
              placeholder="+7 999 999-96-96"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
            />
            <input
              type="email"
              placeholder="Эл. почта"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          <textarea
            placeholder="Ваш вопрос"
            className="question-textarea"
            name="message"
            value={formData.message}
            onChange={handleChange}
          />

          <div className="confirm">
            <input type="checkbox" defaultChecked />
            <span>
              Настоящим подтверждаю, что я ознакомлен и согласен с условиями политики конфиденциальности.
              <br />
              Нажимая кнопку "Отправить", я подтверждаю свою дееспособность, согласие на получение информации
              об оформлении и получении заказа, согласие на обработку персональных данных в соответствии с указанными{' '}
              <a href="#">здесь текстом</a>.
            </span>
          </div>

          <button type="submit" className="submit-button">
            Отправить сообщение
          </button>
        </form>
      </div>
    </div>
  );
};

export default KuestionForm;
