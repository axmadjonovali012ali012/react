import React, { useState } from 'react';
import '../Layout/MyNavbar.css';
import foto1 from '../assets/foto8.png';
import { Modal, InputNumber, Form, Button, Grid } from 'antd';
import foto2 from '../assets/foto9.png';
import foto3 from '../assets/foto7.png';
import foto4 from '../assets/foto5.png';
import foto5 from '../assets/foto6.png';
import foto6 from '../assets/foto4.png';


const materials = [
    { name: 'Строительные блоки', image: foto1, options: ['Плотность', '60 x 40 x 30 см'] },
    { name: 'Бетон и жидкие смеси', image: foto2, options: ['Материал', 'Марка'] },
    { name: 'Сухие смеси', image: foto3 },
    { name: 'Аксессуары для строительства', image: foto4 },
    { name: 'Облицовочный кирпич', image: foto5 },
    { name: 'Тротуарная плитка', image: foto6 }
];

export default function ComboSet() {

    const { useBreakpoint } = Grid;

    const screens = useBreakpoint();
    const isMobile = !screens.md;
    const buttonWidth = isMobile ? '100%' : '50%';


    const [selected, setSelected] = useState([0, 1]);
    const [nextClicked, setNextClicked] = useState(false);

    const toggleSelection = (index) => {
        setSelected((prev) =>
            prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
        );
    };

    const handleNext = () => {
        setNextClicked(true);
    };

    const handleBack = () => {
        setNextClicked(false);
    };

    return (
        <div className="combo-container">
            <div className="combo-box">
                <div className="combo-header">
                    <h1>Собери свой комбо-набор</h1>
                    <span className="discount " style={{ backgroundColor: '#F6151C', fontSize: '25px' }}>Сэкономь до 27%</span>
                </div>

                <h3 className="combo-subtitle">Выберите материалы</h3>

                <div className="materials-grid">
                    {materials.map((mat, idx) => (
                        <div
                            key={idx}
                            className={`material-card ${selected.includes(idx) ? 'selected' : ''}`}
                            onClick={() => toggleSelection(idx)}
                        >
                            {selected.includes(idx) && (
                                <span className="checkmark">✓</span>
                            )}
                            <img src={mat.image} alt={mat.name} className="material-image" />
                            <p className="material-name">{mat.name}</p>
                            {mat.options && (
                                <div className="dropdowns">
                                    {mat.options.map((opt, i) => (
                                        <select key={i}>
                                            <option>{opt}</option>
                                        </select>
                                    ))}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
                <div className="footer d-flex justify-content-between gap-5" style={{ width: '100%' }}>
                    {!nextClicked ? (
                        <button className="next-button" onClick={handleNext}>
                            Далее
                        </button>
                    ) : (
                        <button className="back-button" onClick={handleBack}>
                            Назад
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
}
