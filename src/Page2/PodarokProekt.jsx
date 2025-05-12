import React from 'react'
import foto25 from '../assets/foto25.png'
import "../Page2/Podarok.css"


function PodarokProekt() {
    return (
        <div>

            <div className="cart mt-5 m-auto">
                <div className="cart-content">
                    <img src={foto25} alt="" />
                    <div className="cart-text">
                        <h1>ПРОЕКТ В ПОДАРОК</h1>
                        <p>При заказе строительных материалов, ДАРИМ практичный проект просторного и красиво дома из блоков, подобранный под ваш бюджет и пожелания.</p>
                        <div className="cart-inputs">
                            <input type="text" placeholder="Имя" />
                            <input type="text" placeholder="+7" />
                            <button className="cart-button">Оставить заявку</button>
                        </div>
                        <p className="mt-4">Настоящим подтверждаю, что я ознакомлен и согласен с условиями политики конфиденциальности. Небольшой одноэтажный дом с открытой летней верандой.</p>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default PodarokProekt