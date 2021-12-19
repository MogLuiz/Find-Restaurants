// Packages
import React from "react";

// Styles
import { Card } from "./styles";

interface IImageCardProps {
  photo: string;
}

const ImageCard: React.FC<IImageCardProps> = ({ photo }) => (
  <Card photo={photo} />
);

export default ImageCard;
