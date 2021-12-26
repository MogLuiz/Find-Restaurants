// Packages
import React from "react";

// Assets
import restaurants from "../../assets/restaurante-fake.png";

// // Components
import StarRating from "react-star-ratings";

// Styles
import {
  RestaurantContainer,
  RestaurantAdress,
  RestaurantInfo,
  RestaurantName,
  RestaurantImage,
} from "./styles";

const RestaurantCard: React.FC<any> = ({ restaurant }) => {
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
      <RestaurantImage src={restaurants} alt="Foto do Restaurante" />
    </RestaurantContainer>
  );
};

export default RestaurantCard;
