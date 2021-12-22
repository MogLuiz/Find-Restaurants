// Packages
import React from "react";

// Google maps
import { GoogleApiWrapper, Map, Marker } from "google-maps-react";

export const MapContainer: React.FC<any> = (props) => {
  const { google } = props;
  return <Map google={google} centerAroundCurrentLocation />;
};

export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_GOOGLE_API_KEY as string,
  language: "pt-BR",
})(MapContainer);
