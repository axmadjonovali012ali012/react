import React, { useState } from "react";
import ProfileHeader from "../Page9/ProfileHeader";
import OrderList from "../Page9/OrderList";
import DeliveryModal from "../Page9/DeliveryModal";


function Profil() {
  const [isDeliveryModalOpen, setDeliveryModalOpen] = useState(false);

  const handleDeliveryClick = () => {
    setDeliveryModalOpen(true);
  };

  const handleCloseModal = () => {
    setDeliveryModalOpen(false);
  };

  return (
    <div style={{ fontFamily: "sans-serif", padding: "20px" }}>
      <ProfileHeader />
      <OrderList onDeliveryClick={handleDeliveryClick} />
      {isDeliveryModalOpen && <DeliveryModal onClose={handleCloseModal} />}
    </div>
  );
}

export default Profil;
