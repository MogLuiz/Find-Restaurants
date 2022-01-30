// Packages
import React, { useEffect, useState } from "react";

// Assets
import defautRestaurantImage from "../../assets/restaurante-fake.png";

// Components
import { Skeleton } from "..";

// Types
import { IEstablishmentsSearched } from "../../store/modules/restaurants/types";

// Styles
import { Card, Title } from "./styles";

interface IImageCardProps {
  name: string;
  image: string;
  restaurant: IEstablishmentsSearched;
}

const ImageCard: React.FC<IImageCardProps> = ({ name, image, restaurant }) => {
  // -------------------------------------------------
  // State
  // -------------------------------------------------

  const [isImageLoaded, setIsImageLoaded] = useState(false);

  // -------------------------------------------------
  // Hooks
  // -------------------------------------------------

  useEffect(() => {
    if (!restaurant.photos) {
      setIsImageLoaded(true);
      return;
    }
    const imageLoader = new Image();
    imageLoader.src = image;
    imageLoader.onload = () => setIsImageLoaded(true);
  }, [image]);

  // -------------------------------------------------
  // Render
  // -------------------------------------------------
  return (
    <>
      {isImageLoaded ? (
        <Card photo={restaurant.photos ? image : defautRestaurantImage}>
          <Title>{name}</Title>
        </Card>
      ) : (
        <Skeleton height="90px" width="90px" />
      )}
    </>
  );
};

export default ImageCard;
