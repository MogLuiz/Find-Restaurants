// Packages
import React, { useState } from "react";

// // Components
import StarRating from "react-star-ratings";

// Styles
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
        <StarRating
          starDimension="20px"
          rating={4.5}
          starRatedColor="#FFA72D"
        />
        <RestaurantAdress>Rua Espirito santo, 116</RestaurantAdress>
      </RestaurantInfo>
    </RestaurantContainer>
  );
};

export default RestaurantCard;
