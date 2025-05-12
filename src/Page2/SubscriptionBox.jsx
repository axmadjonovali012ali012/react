import React, { useState } from 'react';
import './SubscriptionBox.css';
import foto26 from '../assets/foto26.png'


const SubscriptionBox = () => {
    const [email, setEmail] = useState('');

    const handleSubmit = () => {
        if (email.trim() !== '') {
            window.location.href = 'https://fabrikabetonov.uz';
        } else {
            alert('Пожалуйста, введите e-mail.');
        }
    };

    return (
        <div className="subscription-container">
            <div className="subscription-content">
                <div className="text-section">
                    <h2 className="title">
                        РАССЫЛКИ СО СКИДКАМИ <span className="emoji">🔥%</span>
                    </h2>
                    <p className="description">
                        Оставьте свою электронную почту, чтобы получать информацию о новинках, скидках и акциях.
                    </p>
                    <div className="form">
                        <input
                            type="email"
                            placeholder="E-mail"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <button onClick={handleSubmit}>Подписаться</button>
                    </div>
                </div>
                <img className='mb-5' src={foto26} alt="" />
            </div>
        </div>
    );
};

export default SubscriptionBox;
