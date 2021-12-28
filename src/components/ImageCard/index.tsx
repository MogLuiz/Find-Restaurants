// Packages
import React from "react";

// Assets
import restaurants from "../../assets/restaurante-fake.png";

// Styles
import { Card, Title } from "./styles";

interface IImageCardProps {
  photo: any;
  restaurantName: string;
}

const ImageCard: React.FC<IImageCardProps> = ({ photo, restaurantName }) => (
  // -------------------------------------------------
  // Render
  // -------------------------------------------------
  <Card photo={photo.photos ? photo?.photos[0]?.getUrl() : restaurants}>
    <Title>{restaurantName}</Title>
  </Card>
);

export default ImageCard;
