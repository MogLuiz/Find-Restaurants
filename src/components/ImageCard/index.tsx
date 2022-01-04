// Packages
import React, { useEffect, useState } from "react";

// Assets
import restaurants from "../../assets/restaurante-fake.png";

// Types
import { IEstablishmentsSearched } from "../../store/modules/restaurants/types";

// Styles
import { Card, Title } from "./styles";

interface IImageCardProps {
  restaurant: IEstablishmentsSearched;
}

const ImageCard: React.FC<IImageCardProps> = ({ restaurant }) => {
  // -------------------------------------------------
  // State
  // -------------------------------------------------

  const [isImageLoaded, setIsImageLoaded] = useState(false);

  // -------------------------------------------------
  // Hooks
  // -------------------------------------------------

  useEffect(() => {
    const imageLoader = new Image();
    imageLoader.src = restaurant?.photos[0];
    imageLoader.onload = () => setIsImageLoaded(true);
  }, [restaurant.photos[0]]);

  // -------------------------------------------------
  // Render
  // -------------------------------------------------
  return (
    <Card
      photo={restaurant.photos ? restaurant?.photos[0]?.getUrl() : restaurants}
    >
      <Title>{restaurant.name}</Title>
    </Card>
  );
};

export default ImageCard;
