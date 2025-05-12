import React from 'react';
import { Button } from 'antd';
import { PhoneOutlined } from '@ant-design/icons';
import '../Page2/Podarok.css';

function Karta() {
    return (
        <div>
            <div className="karta-wrapper">
                <div className="karta-left">
                    <h1 className='text-start' style={{ fontWeight: 700 }}>ПРИЕЗЖАЙТЕ К НАМ</h1>
                    <p className='text-start'>
                        Чтобы получить консультацию квалифицированных специалистов по применению строительных блоков для возведения частных и коммерческих зданий.
                        Мы производим различные виды блоков, поэтому честно расскажем о преимуществах и недостатках каждого из них и подберем оптимальное решение под вашу задачу.
                    </p>
                    <div className="d-flex gap-4 align-items-center justify-content-start">
                        <Button className="text-primary p-2 karta-button" style={{ width: '30%', backgroundColor: '#F1F0FA' }}>
                            Заказать звонок
                        </Button>
                        <p className='mt-3'>
                            <PhoneOutlined /> +7 395 252-59-99
                        </p>
                    </div>
                </div>

                <div className="karta-right">
                    <iframe
                        className="karta-iframe"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2243.061757118276!2d37.61729931592835!3d55.75582616346498!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x413d4e8db263bd89%3A0x4e5f5b1ab22a4c7f!2z0JrQsNGD0YHRgtCw0LnQuNGC0L3Q!5e0!3m2!1sru!2sru!4v1679754511969!5m2!1sru!2sru"
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>
            </div>
        </div>
    );
}

export default Karta;
