import React from 'react';
import { FireOutlined, ExperimentOutlined, CheckCircleOutlined } from '@ant-design/icons';
import '../Layout/MyNavbar.css';

const BenefitsSection = () => {
  const benefits = [
    {
      icon: <FireOutlined />,
      title: 'Экономия до 30%',
      desc: 'Поможем сэкономить ваш бюджет на строительство дома благодаря правильному подбору всех материалов.',
      bgColor: '#ffe5d1',
    },
    {
      icon: <ExperimentOutlined />,
      title: 'Собственная лаборатория',
      desc: 'Испытываем каждую партию на соответствие требованиям ГОСТ в аттестованной лаборатории.',
      bgColor: '#f2e7ff',
    },
    {
      icon: <CheckCircleOutlined />,
      title: '14 Лет на рынке',
      desc: 'Фабрика Бетонов известна в России и за рубежом. Из наших материалов построены тысячи зданий в Российской Федерации.',
      bgColor: '#e6f8eb',
    },
  ];

  return (
    <div className="benefits-section mt-5">
      <div className="benefit-card-container">
        {benefits.map((item, idx) => (
          <div className="benefit-card" key={idx}>
            <div
              className="benefit-icon-wrapper"
              style={{ backgroundColor: item.bgColor }}
            >
              {React.cloneElement(item.icon, { style: { fontSize: '36px', color: '#ff7a00' } })}
            </div>
            <div className="benefit-title">{item.title}</div>
            <div className="benefit-desc">{item.desc}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BenefitsSection;
