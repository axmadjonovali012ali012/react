import React, { useState } from 'react';
import './HouseCalculator.css';

const HouseCalculator = () => {
  const [area, setArea] = useState('');
  const [material, setMaterial] = useState('brick');
  const [floorType, setFloorType] = useState('wooden');
  const [windows, setWindows] = useState(0);
  const [doors, setDoors] = useState(0);
  const [extras, setExtras] = useState({
    electricity: false,
    water: false,
    heating: false,
  });
  const [loan, setLoan] = useState(false);
  const [total, setTotal] = useState(null);

  const materialPrices = {
    brick: 500,
    wood: 300,
    steel: 800,
  };

  const floorPrices = {
    wooden: 200,
    tile: 300,
    carpet: 100,
  };

  const windowPrices = 50; 
  const doorPrices = 150; 
  const extrasPrices = {
    electricity: 1000,
    water: 500,
    heating: 1500,
  };

  const handleCalculate = () => {
    let basePrice = materialPrices[material] * area;
    let floorPrice = floorPrices[floorType] * area;
    let windowCost = windows * windowPrices;
    let doorCost = doors * doorPrices;
    let extraCost = 0;

    for (let key in extras) {
      if (extras[key]) {
        extraCost += extrasPrices[key];
      }
    }

    let totalCost = basePrice + floorPrice + windowCost + doorCost + extraCost;
    if (loan) {
      totalCost += 5000; 
    }

    setTotal(totalCost);
  };

  return (
    <div className="calculator-container mt-5">
      <h2>Калькулятор стоимости строительства дома</h2>
      <div className="input-group">
        <label htmlFor="area">Площадь дома (м²):</label>
        <input
          type="number"
          id="area"
          value={area}
          onChange={(e) => setArea(e.target.value)}
        />
      </div>
      <div className="input-group">
        <label htmlFor="material">Выберите материал:</label>
        <select
          id="material"
          value={material}
          onChange={(e) => setMaterial(e.target.value)}
        >
          <option value="brick">Кирпич</option>
          <option value="wood">Дерево</option>
          <option value="steel">Сталь</option>
        </select>
      </div>
      <div className="input-group">
        <label htmlFor="floorType">Выберите тип пола:</label>
        <select
          id="floorType"
          value={floorType}
          onChange={(e) => setFloorType(e.target.value)}
        >
          <option value="wooden">Деревянный</option>
          <option value="tile">Плитка</option>
          <option value="carpet">Ковровое покрытие</option>
        </select>
      </div>
      <div className="input-group">
        <label htmlFor="windows">Количество окон:</label>
        <input
          type="number"
          id="windows"
          value={windows}
          onChange={(e) => setWindows(e.target.value)}
        />
      </div>
      <div className="input-group">
        <label htmlFor="doors">Количество дверей:</label>
        <input
          type="number"
          id="doors"
          value={doors}
          onChange={(e) => setDoors(e.target.value)}
        />
      </div>
      <div className="extras">
        <label>
          <input
            type="checkbox"
            checked={extras.electricity}
            onChange={(e) =>
              setExtras({ ...extras, electricity: e.target.checked })
            }
          />
          Электричество
        </label>
        <label>
          <input
            type="checkbox"
            checked={extras.water}
            onChange={(e) =>
              setExtras({ ...extras, water: e.target.checked })
            }
          />
          Вода
        </label>
        <label>
          <input
            type="checkbox"
            checked={extras.heating}
            onChange={(e) =>
              setExtras({ ...extras, heating: e.target.checked })
            }
          />
          Отопление
        </label>
      </div>
      <div className="loan">
        <label>
          <input
            type="checkbox"
            checked={loan}
            onChange={(e) => setLoan(e.target.checked)}
          />
          Кредит
        </label>
      </div>
      <button onClick={handleCalculate}>Рассчитать</button>
      {total !== null && (
        <div className="result">
          <h3>Общая стоимость: ${total.toFixed(2)}</h3>
        </div>
      )}
    </div>
  );
};

export default HouseCalculator;
