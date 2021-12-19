// Packages
import React from "react";

// Styles
import { Card, Title } from "./styles";

interface IImageCardProps {
  photo: string;
  restaurantName: string;
}

const ImageCard: React.FC<IImageCardProps> = ({ photo, restaurantName }) => (
  // -------------------------------------------------
  // Render
  // -------------------------------------------------
  <Card photo={photo}>
    <Title>{restaurantName}</Title>
  </Card>
);

export default ImageCard;
