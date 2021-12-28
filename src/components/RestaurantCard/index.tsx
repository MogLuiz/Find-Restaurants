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
          rating={restaurant.rating}
          starRatedColor="#FFA72D"
        />
        <RestaurantAdress>{restaurant.vicinity}</RestaurantAdress>
      </RestaurantInfo>
      <RestaurantImage
        src={restaurant.photos ? restaurant?.photos[0]?.getUrl() : restaurants}
        alt="Foto do Restaurante"
      />
    </RestaurantContainer>
  );
};

export default RestaurantCard;
