import React from "react";
import "./App.css";
import foto15 from "../assets/foto15.png";


const ProfileHeader = () => (
    <div className="profile mt-5">
        <img src={foto15} alt="" />
        <div className="profile-info">
            <h2>Андрей Марин</h2>
            <p>+7 (999) 999-99-99</p>
            <p>fabrikabetonov@mail.ru</p>
            <p>Россия, г. Москва</p>
        </div>
    </div>
);

export default ProfileHeader;
