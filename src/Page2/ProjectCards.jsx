import React from "react";
import "./ProjectCards.css";
import foto16 from "../assets/foto16.png"
import foto17 from "../assets/foto17.png"
import foto18 from "../assets/foto18.png"

const cards = [
    {
        icon: foto16,
        title: "Мы изготавливаем блоки для любых задач",
        text: "Выбор блоков больше не будет трудным. Фабрика Бетонов изготавливает все виды современных, надёжных блоков для решения строительных задач любой сложности. Мы разработали более 20 проектов удобных домов с просторными и светлыми комнатами, в которых будет комфортно всем членам семьи. ",
    },
    {
        icon: foto17,
        title: "Хотите купить проект?",
        text: "Мы разработали более 20 проектов удобных домов с просторными и светлыми комнатами, в которых будет комфортно всем членам семьи. Если по каким-то причинам Вы не хотите строить из наших материалов, Вы можете купить проект. Фабрика Бетонов изготавливает все виды современных, надёжных блоков для решения строительных задач любой сложности.",
    },
    {
        icon: foto18,
        title: "Бесплатно внесем простые изменения в проект",
        text: "Хотите сделать зеркальный проект, сместить перегородку или изменить конфигурацию окон? Бесплатно внесем небольшие правки в проект с соблюдением строительных норм. Фабрика Бетонов изготавливает все виды современных, надёжных блоков для решения строительных задач любой сложности.",
    },
];

const ProjectCards = () => {
    return (
        <div className="cards-container">
            <h2 className="cards-heading text-start" style={{ marginLeft: '20px', marginBottom: '50px' }} >ПРОЕКТЫ ДОМОВ</h2>
            <div className="cards-wrapper mt-5" style={{ marginTop: '100px' }}>
                {cards.map((card, index) => (
                    <div key={index} className="card">
                        <img src={card.icon} alt="icon" className="card-icon" />
                        <h3 className="card-title">{card.title}</h3>
                        <p className="card-text">{card.text}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProjectCards;
