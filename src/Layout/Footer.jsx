import React from 'react';
import '../Layout/MyNavbar.css';
import { FacebookOutlined, YoutubeOutlined, InstagramOutlined, LinkedinOutlined } from '@ant-design/icons';

const Footer = () => {
    return (
        <footer>
            <div className="footer-container mt-5">
                <ul className="footer-list">
                    <li><a href="#">Оплата</a></li>
                    <li><a href="#">Контакты</a></li>
                    <li><a href="#">Поставщикам</a></li>
                    <li><a href="#">Демонстрация</a></li>
                    <li><a href="#">Реклама на сайте</a></li>
                </ul>

                <ul className="footer-list">
                    <li><a href="#">Доставка</a></li>
                    <li><a href="#">Достижения</a></li>
                    <li><a href="#">Лаборатория</a></li>
                    <li><a href="#">Карточка предприятия</a></li>
                    <li><a href="#">Политика конфиденциальности</a></li>
                </ul>

                <ul className="footer-list">
                    <li><a href="#"><span style={{ fontWeight: 700 }}>Каталог</span></a></li>
                    <li><a href="#">Бетон и жидкие смеси</a></li>
                    <li><a href="#">Заборы и бордюры</a></li>
                    <li><a href="#">Утеплители</a></li>
                    <li><a href="#">Сухие смеси</a></li>
                </ul>

                <ul className="social">
                    <li>
                        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                            <FacebookOutlined style={{ fontSize: '40px', color: '#1877F2' }} />
                        </a>
                    </li>
                    <li>
                        <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
                            <YoutubeOutlined style={{ fontSize: '40px', color: '#FF0000' }} />
                        </a>
                    </li>
                    <li>
                        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                            <InstagramOutlined style={{ fontSize: '40px', color: '#C13584' }} />
                        </a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                            <LinkedinOutlined style={{ fontSize: '40px', color: '#0A66C2' }} />
                        </a>
                    </li>
                </ul>
            </div>
        </footer>
    );
};

export default Footer;
