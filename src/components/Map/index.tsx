// Packages
import React from "react";

// Google maps
import { GoogleApiWrapper } from "google-maps-react";

export const MapContainer: React.FC = () => {
  return <div />;
};

export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_GOOGLE_API_KEY as string,
  language: "pt-BR",
})(MapContainer);
