// Packages
import React from "react";

// Google maps
import { GoogleApiWrapper, Map, Marker } from "google-maps-react";

export const MapContainer: React.FC<any> = (props) => {
  // -------------------------------------------------
  // Props
  // -------------------------------------------------
  const { google } = props;

  // -------------------------------------------------
  // Functions
  // -------------------------------------------------

  const searchNearby = (map: any, center: any) => {
    const service = new google.maps.placesService(map);

    const request = {
      location: center,
      radius: "20000",
      type: ["restaurant"],
    };

    service.nearbySearch(request, (results: any, status: any) => {
      if (status === google.maps.places.placesService.OK) {
        console.log({ results });
      }
    });
  };

  // -------------------------------------------------
  // Render
  // -------------------------------------------------
  return <Map google={google} centerAroundCurrentLocation />;
};

export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_GOOGLE_API_KEY as string,
  language: "pt-BR",
})(MapContainer);
