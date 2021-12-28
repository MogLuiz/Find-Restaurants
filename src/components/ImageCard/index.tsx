// Packages
import React from "react";

// Assets
import restaurants from "../../assets/restaurante-fake.png";

// Types
import { IEstablishmentsSearched } from "../../store/modules/restaurants/types";

// Styles
import { Card, Title } from "./styles";

interface IImageCardProps {
  restaurant: IEstablishmentsSearched;
}

const ImageCard: React.FC<IImageCardProps> = ({ restaurant }) => (
  // -------------------------------------------------
  // Render
  // -------------------------------------------------
  <Card
    photo={restaurant.photos ? restaurant?.photos[0]?.getUrl() : restaurants}
  >
    <Title>{restaurant.name}</Title>
  </Card>
);

export default ImageCard;
