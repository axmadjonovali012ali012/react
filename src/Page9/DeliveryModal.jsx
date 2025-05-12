import React from "react";
import "./App.css";

const DeliveryModal = ({ onClose }) => (
    <div className="modal">
        <div className="modal-content">
            <h2>Подтверждение доставки</h2>
            <p>Вы уверены, что хотите заказать доставку?</p>
            <button className="modal-button confirm" onClick={onClose}>
                Подтвердить
            </button>
            <button className="modal-button cancel" onClick={onClose}>
                Отмена
            </button>
        </div>
    </div>
);

export default DeliveryModal;
