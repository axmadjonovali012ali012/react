import React from 'react';
import '../Layout/MyNavbar.css';
import { HomeOutlined, CarOutlined, ToolOutlined } from '@ant-design/icons';

const FactoryStats = () => {
    const stats = [
        {
            icon: <HomeOutlined style={{ fontSize: '40px', color: '#e60000' }} />,
            number: '7.000 м²',
            title: 'Промкомплекс нового поколения',
            desc:
            'За 14 лет произведено и реализовано более 1 млн кубических метров готовой продукции. При этом переработано 1.225.000 тонн сырья (38 тыс. т/в год).',
            className: 'left-card',
        },
        {
            icon: <CarOutlined style={{ fontSize: '40px', color: '#e60000' }} />,
            number: '168',
            title: 'Новейшая техника',
            desc:
                'Собственный автопарк надёжной специальной техники позволяет добросовестно исполнять свои обязательства перед клиентом, быстро и качественно доставляя заказы.',
            className: 'center-card',
        },
        {
            icon: <ToolOutlined style={{ fontSize: '40px', color: '#e60000' }} />,
            number: '12',
            title: 'Автозаводы',
            desc:
                'С современными немецкими и российскими автоматизированными линиями по производству блоков и бетона, отвечающими стандартам качества, в полном соответствии с ГОСТ.',
            className: 'right-card',
        },
    ];

    return (
        <div className="factory-stats1">
            <h2 className="section-title1">ФАБРИКА БЕТОНОВ СЕГОДНЯ</h2>
            <div className="card-container1">
                {stats.map((item, idx) => (
                    <div className={`stat-card ${item.className}`} key={idx}>
                        <div className="icon">{item.icon}</div>
                        <div className="number fs-2">{item.number}</div>
                        <div className="title">{item.title}</div>
                        <div className="desc">{item.desc}</div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FactoryStats;
