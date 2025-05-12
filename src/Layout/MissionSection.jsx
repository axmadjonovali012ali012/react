import React from 'react';
import '../Layout/MyNavbar.css';

const MissionSection = () => (
    <div className="mission-section m-auto p-5 bg-white" style={{ width: '97%'}}>
        <div className="mission-goal-container">
            <h2 className="mission-title text-start">НАША МИССИЯ</h2>
            <p className="mission-description text-start">
                Мы стремимся помочь покупателям в создании идеальных и уютных домов,
                превратить трудоемкий и дорогостоящий процесс ремонта и обустройства в
                увлекательное и доступное каждому занятие. Мы также стремимся к инновациям в
                обеспечения лидерства на рынке.
            </p>
        </div>
        <div className="mission-goal-container">
            <h2 className="mission-title text-start">НАША ЦЕЛЬ</h2>
            <p className="mission-description text-start">
                Предоставление высококачественного бетона и строительных решений,
                соответствующих требованиям ГОСТ. Мы также стремимся к инновациям в
                области бетонных технологий и постоянно улучшаем наши услуги для
                обеспечения лидерства на рынке.
            </p>
        </div>
    </div>
);

export default MissionSection;
