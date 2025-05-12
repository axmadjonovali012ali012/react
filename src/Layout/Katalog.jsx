import React from 'react';
import { Carousel, Button, Flex, Grid } from 'antd';
const { useBreakpoint } = Grid;
import foto2 from '../assets/foto2.png';
import foto3 from '../assets/foto3.png';
import foto4 from '../assets/foto4.png';
import foto5 from '../assets/foto5.png';
import foto6 from '../assets/foto6.png';
import foto7 from '../assets/foto7.png';
import foto8 from '../assets/foto8.png';
import foto9 from '../assets/foto9.png';
import foto10 from '../assets/foto10.png';
import CalculatorBanner from './CalculatorBanner';
import FactoryStats from './FactoryStats';
import BenefitsSection from './BenefitsSection';
import MissionSection from './MissionSection';
import ComboSet from './ComboSet';
import Footer from './Footer';
import Karta from '../Page2/Karta';
import SubscriptionBox from '../Page2/SubscriptionBox';


const Main = () => {

    const handleRedirect = () => {
        window.location.href = 'https://presium.pro/blog/last-slide';
    };

    const screens = useBreakpoint();

    const isMobile = !screens.md; 
    const flexWidth = isMobile ? '100%' : '25%';


    return (
        <div>
            <Carousel autoplay autoplaySpeed={3000} dots={false} style={{ marginTop: '20px', padding: '20px' }} className="cars">
                <div>
                    <img src={foto2} alt="Slide 1" className="carousel-image" />
                </div>
                <div>
                    <img src={foto2} alt="Slide 2" className="carousel-image" />
                </div>
                <div>
                    <img src={foto2} alt="Slide 3" className="carousel-image" />
                </div>
            </Carousel>
            <div className="pro-container mt-5 d-flex" style={{ width: "84%", margin: "0 auto", gap: "250px" }}>
                <div>
                    <h1>ПРОИЗВОДСТВО</h1>
                    <p>
                        Наш завод имеет высокую производственную мощность, которая позволяет выпускать большое количество изделий ежегодно. Современное оборудование и технологии, применяемые нами, обеспечивают эффективность и качество производства.
                    </p>
                </div>
            </div>
            <div className='container '>
                <div className="cardd">
                    <div className="card1">
                        <img src={foto3} alt="" />
                        <h3>Строительные блоки</h3>
                    </div>
                    <div className="card1">
                        <img src={foto4} alt="" />
                        <h3>Тротуарная плитка</h3>
                    </div>
                    <div className="card1">
                        <img src={foto5} alt="" />
                        <h3>Облицовочный кирпич</h3>
                    </div>
                    <div className="card1">
                        <img src={foto6} alt="" />
                        <h3>Заборы и бордюры</h3>
                    </div>
                </div>
                <div className="cardd">
                    <div className="card1">
                        <img src={foto7} alt="" />
                        <h3>Сухие смеси</h3>
                    </div>
                    <div className="card1"  >
                        <img src={foto8} alt="" />
                        <h3 style={{ marginTop: '50px' }} >Строительные блоки</h3>
                    </div>
                    <div className="card1">
                        <img src={foto9} alt="" />
                        <h3>Бетон и жидкие смеси</h3>
                    </div>
                    <div className="card1">
                        <img src={foto10} alt="" />
                        <h3>Инструменты и сопутствующие </h3>
                    </div>
                </div>
                <Flex justify="flex-start" gap="small" wrap style={{ width: flexWidth }}>
                    <Button
                        type="primary"
                        danger
                        style={{ margin: '10px', padding: '3px', width: '100%' }}
                        onClick={handleRedirect}
                    >
                        Перейти в каталог
                    </Button>
                </Flex>
            </div>
            <CalculatorBanner />
            <FactoryStats />
            <BenefitsSection />
            <MissionSection />
            <ComboSet />
            <Karta />
            <SubscriptionBox />
            <Footer />
        </div>
    );
};

export default Main;



