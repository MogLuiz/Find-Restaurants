// Packages
import React, { useEffect, useState } from "react";

// Assets
import restaurants from "../../assets/restaurante-fake.png";

// Components
import { Skeleton } from "..";

// Types
import { IEstablishmentsSearched } from "../../store/modules/restaurants/types";

// Styles
import { Card, Title } from "./styles";

interface IImageCardProps {
  name: string;
  image: string;
}

const ImageCard: React.FC<IImageCardProps> = ({ name, image }) => {
  // -------------------------------------------------
  // State
  // -------------------------------------------------

  const [isImageLoaded, setIsImageLoaded] = useState(false);

  // -------------------------------------------------
  // Hooks
  // -------------------------------------------------

  useEffect(() => {
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
        <Card photo={image}>
          <Title>{name}</Title>
        </Card>
      ) : (
        <Skeleton height="90px" width="90px" />
      )}
    </>
  );
};

export default ImageCard;
