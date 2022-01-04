// Packages
import React, { useState } from "react";

// Assets
import restaurants from "../../assets/restaurante-fake.png";

// Components
import StarRating from "react-star-ratings";
import { Skeleton } from "..";

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
  onClick: () => void;
}

const RestaurantCard: React.FC<IRestaurantCardProps> = ({
  restaurant,
  onClick,
}) => {
  // -------------------------------------------------
  // States
  // -------------------------------------------------

  const [isImageLoaded, setIsImageLoaded] = useState(false);

  // -------------------------------------------------
  // Render
  // -------------------------------------------------
  return (
    <RestaurantContainer onClick={onClick}>
      <RestaurantInfo>
        <RestaurantName>{restaurant.name}</RestaurantName>
        <StarRating
          starDimension="20px"
          rating={restaurant.rating}
          starRatedColor="#FFA72D"
        />
        <RestaurantAdress>
          {restaurant.vicinity || restaurant.formatted_address}
        </RestaurantAdress>
      </RestaurantInfo>
      <RestaurantImage
        imageLoaded={isImageLoaded}
        src={restaurant.photos ? restaurant?.photos[0]?.getUrl() : restaurants}
        alt="Foto do Restaurante"
        onLoad={() => setIsImageLoaded(true)}
      />
      {!isImageLoaded && <Skeleton height="100px" width="100px" />}
    </RestaurantContainer>
  );
};

export default RestaurantCard;
