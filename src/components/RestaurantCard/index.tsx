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
          starRatedColor="hsl(55.08196721311475, 97.60000000000001%, 50.98039215686274%)"
        />
        <RestaurantAdress>Rua Espirito santo, 116</RestaurantAdress>
      </RestaurantInfo>
    </RestaurantContainer>
  );
};

export default RestaurantCard;
