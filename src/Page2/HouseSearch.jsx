import React, { useState } from 'react';
import foto19 from "../assets/foto19.png"
import foto20 from "../assets/foto20.png"
import foto21 from "../assets/foto21.png"
import foto22 from "../assets/foto22.png"
import foto23 from "../assets/foto23.png"
import { LogoutOutlined } from '@ant-design/icons';
import "../Page2/Search.css"


const HouseSearch = () => {
    const [searchTerm, setSearchTerm] = useState('');

    const houses = [
        {
            title: 'Проект Лекреция',
            image: foto21,
            price: 'от 423 810 ₽',
            area: '70,41 / 83,78 m²',
            total: '83,78 m²',
            description: 'Небольшой одноэтажный дом с открытой летней верандой.',
        },
        {
            title: 'Проект Патрика',
            image: foto20,
            price: 'от 592 241 ₽',
            area: '59,84 / 98,21 m²',
            total: '98,21 m²',
            description: 'Небольшой одноэтажный дом с открытой летней верандой.',
        },
        {
            title: 'Проект Рондо',
            image: foto22,
            price: 'от 698 249 ₽',
            area: '95,56 / 194,52 m²',
            total: '107,52 m²',
            description: 'Небольшой одноэтажный дом с открытой летней верандой.',
        },
        {
            title: 'Проект Каледония',
            image: foto20,
            price: 'от 619 048 ₽',
            area: '83,94 / 105,94 m²',
            total: '128,83 m²',
            description: 'Небольшой одноэтажный дом с открытой летней верандой.',
        },
        {
            title: 'Проект Лекреция',
            image: foto21,
            price: 'от 492 012 ₽',
            area: '81,79 / 149,49 m²',
            total: '173,29 m²',
            description: 'Небольшой одноэтажный дом с открытой летней верандой.',
        },
        {
            title: 'Проект Патрика',
            image: foto20,
            price: 'от 249 769 ₽',
            area: '39,26 / 49,51 m²',
            total: '89,29 m²',
            description: 'Небольшой одноэтажный дом с открытой летней верандой.',
        },
    ];

    const filteredHouses = houses.filter(house =>
        house.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="house-search-container">
            <div className="py-5">
                <h4 style={{ marginLeft: '15px' }}>Поиск</h4>
                <input
                    type="text"
                    placeholder="Введите название проекта..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="house-search-input p-2 form-control w-25"
                    style={{ marginLeft: '15px', borderRadius: '5px' }}
                />
            </div>

            <div className="house-cards">
                {filteredHouses.length === 0 ? (
                    <p>Ничего не найдено.</p>
                ) : (
                    filteredHouses.map((house, index) => (
                        <div className="house-card" key={index}>
                            <img src={house.image} alt={house.title} />
                            <div className="house-card-body">
                                <h3>{house.title}</h3>
                                <p>{house.description}</p>
                                <div className="d-flex justify-content-between border-bottom py-2">
                                    <p className="mb-0">Жилая / Общая:</p>
                                    <p className="mb-0">{house.area}</p>
                                </div>
                                <div className="d-flex justify-content-between border-bottom py-2">
                                    <p className="mb-0">Площадь застройки:</p>
                                    <p className="mb-0">{house.total}</p>
                                </div>
                                <div className="d-flex justify-content-between align-items-center mt-2">
                                    <h5 className="text-danger">{house.price}</h5>
                                    <button onClick={() => window.open('https://artdeco.uz/gotovyproekti/', '_blank')}
                                        className='w-50'
                                        style={{ backgroundColor: 'red' }}>
                                        Подробнее <LogoutOutlined />
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))
                )}
            </div>
        </div>

    );
};

export default HouseSearch;
