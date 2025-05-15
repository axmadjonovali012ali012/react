import React from "react";
import "./App.css";

const OrderList = ({ onDeliveryClick }) => {
    return (
        <div className="order-list-container">
            <h3>Заказы</h3>
            <table className="order-table">
                <thead>
                    <tr>
                        <th>№</th>
                        <th>Статус</th>
                        <th>Покупатель</th>
                        <th>Дата</th>
                        <th>Итого</th>
                        <th>Действие</th>
                    </tr>
                </thead>
                <tbody>
                    
                    <tr>
                        <td>123456</td>
                        <td>Ожидает</td>
                        <td>Андрей Марин</td>
                        <td>01.05.2025</td>
                        <td>400 $</td>
                        <td>
                            <button className="delivery-button" onClick={onDeliveryClick}>
                                Заказать доставку
                            </button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};


export default OrderList;
