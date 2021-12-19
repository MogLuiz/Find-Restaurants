import React from "react";

import {
  RestaurantContainer,
  RestaurantAdress,
  RestaurantInfo,
  RestaurantName,
} from "./styles";

const RestaurantCard: React.FC = () => {
  // -------------------------------------------------
  // Render
  // -------------------------------------------------
  return (
    <RestaurantContainer>
      <RestaurantInfo>
        <RestaurantName>Nome do Restaurante</RestaurantName>
        <p>Avalização</p>
        <RestaurantAdress>Rua Espirito santo, 116</RestaurantAdress>
      </RestaurantInfo>
    </RestaurantContainer>
  );
};

export default RestaurantCard;
