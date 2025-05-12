import React, { useState } from "react";
import { Tabs } from "antd";
import {
    EnvironmentOutlined,
    PhoneOutlined,
    ClockCircleOutlined,
} from "@ant-design/icons";
import "./ContactPage.css";

const { TabPane } = Tabs;

const contacts = {
    Иркутск: {
        mainOffice: "Иркутск, ул. Промышленная 7",
        plants: [
            {
                title: "Немецкие заводы по выпуску бетона",
                addresses: [
                    "Иркутск, ул. Ракитная 18 ст.5",
                    "Иркутск, пос. Молодежный 1Б",
                ],
            },
            {
                title: "Завод по выпуску пескоблоков и бетона",
                addresses: ["Иркутск, ул. Полярная 95Б"],
            },
            {
                title: "Итальянский завод по выпуску бетона",
                addresses: ["Иркутск, пос. Молодежный 1Б"],
            },
        ],
    },
    Ангарск: {
        mainOffice: "Ангарск, ул. Ленина 12",
        plants: [],
    },
    Красноярск: {
        mainOffice: "Красноярск, ул. Центральная 5",
        plants: [],
    },
    Тайшет: {
        mainOffice: "Тайшет, ул. Заводская 9",
        plants: [],
    },
    "Улан-Удэ": {
        mainOffice: "Улан-Удэ, ул. Октябрьская 15",
        plants: [],
    },
};

const ContactPage = () => {
    const [activeTab, setActiveTab] = useState("Иркутск");

    const currentData = contacts[activeTab];

    return (
        <div className="contact-page">
            <div className="breadcrumbs">Главная — Контакты</div>
            <h1 className="title" >КОНТАКТНАЯ ИНФОРМАЦИЯ</h1>
            <p className="desc">
                "Фабрика Бетонов" всегда на связи со своими клиентами. Узнать актуальную
                информацию или сделать заказ качественных строительных блоков вы можете
                по телефону в любом из наших филиалов.
            </p>

            <Tabs activeKey={activeTab} onChange={setActiveTab} centered className="region-tabs">
                {Object.keys(contacts).map((city) => (
                    <TabPane tab={city} key={city} />
                ))}
            </Tabs>

            <div className="content">
                <div className="info-block">
                    <div className="address-section">
                        <h3>Главный офис</h3>
                        <div className="address-item">
                            <EnvironmentOutlined className="location-icon" />
                            <span>{currentData.mainOffice}</span>
                        </div>
                    </div>

                    {currentData.plants.map((section, index) => (
                        <div key={index} className="address-section">
                            <h3>{section.title}</h3>
                            {section.addresses.map((address, i) => (
                                <div className="address-item" key={i}>
                                    <EnvironmentOutlined className="location-icon" />
                                    <span>{address}</span>
                                </div>
                            ))}
                        </div>
                    ))}
                </div>

                <div className="map-block">
                    <iframe
                        title="map"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2321.949418446483!2d104.2173413160599!3d52.286974179768794!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5da83f1c401ad7c5%3A0xd7bc99ea7c601b3c!2z0J_QtdGA0LzQsNC90LDRjyDRg9C7LiwgNywg0JjQstCw0YDQvdC40L3QsCwg0JjQstCw0YDQvdC40LLQtdGA0YHQuNGC0LXRgiwgNjYwMDI2!5e0!3m2!1sru!2sru!4v1715422503339!5m2!1sru!2sru"
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>

                    <div className="map-info">
                        <p>
                            <ClockCircleOutlined /> Пн-Сб с 09:00 до 18:00;
                            <br /> Вс - Выходной
                        </p>
                        <p className="call-now">
                            Заказать звонок <PhoneOutlined /> +7 395 250-45-80
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactPage;
