import React from 'react'
import { MailOutlined, PhoneOutlined } from '@ant-design/icons';
import './Fabrika.css'


function Fabrika() {
    return (
        <div>
            <div className="container1">
                <h1>МЫ ИЩЕМ ПАРТНЕРОВ В ДРУГИХ РЕГИОНАХ</h1>
                <div className="display">
                    <p>
                        <PhoneOutlined style={{ color: 'red', marginRight: '8px' }} />
                        +7 395 252-59-99
                    </p>
                    <p>
                        <MailOutlined style={{ color: 'red', marginRight: '8px' }} />
                        partner@fabrika-betonov.ru
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Fabrika