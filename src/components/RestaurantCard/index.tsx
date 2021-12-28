// Packages
import React from "react";

// Assets
import restaurants from "../../assets/restaurante-fake.png";

// Components
import StarRating from "react-star-ratings";

// Types
import { IEstablishmentsSearched } from "../../store/modules/restaurants/types";

// Styles
import {
  RestaurantContainer,
  RestaurantAdress,
  RestaurantInfo,
  RestaurantName,
  RestaurantImage,
} from "./styles";

interface IRestaurantCardProps {
  restaurant: IEstablishmentsSearched;
}

const RestaurantCard: React.FC<IRestaurantCardProps> = ({ restaurant }) => {
  // -------------------------------------------------
  // Render
  // -------------------------------------------------
  return (
    <RestaurantContainer>
      <RestaurantInfo>
        <RestaurantName>{restaurant.name}</RestaurantName>
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
