// Packages
import React, { useEffect, useState } from "react";

// Google maps
import { GoogleApiWrapper, Map, Marker } from "google-maps-react";

export const MapContainer: React.FC<any> = ({ google, query }) => {
  // -------------------------------------------------
  // State
  // -------------------------------------------------

  const [map, setMap] = useState<any>();

  // -------------------------------------------------
  // Hooks
  // -------------------------------------------------

  useEffect(() => {
    if (query) searchByQuery(query);
  }, [query]);

  // -------------------------------------------------
  // Functions
  // -------------------------------------------------

  const searchByQuery = (query: any) => {
    const service = new google.maps.places.PlacesService(map);

    const request = {
      location: map.center,
      radius: "200",
      type: ["restaurant"],
      query,
    };

    service.textSearch(request, (results: any, status: any) => {
      if (status === google.maps.places.PlacesServiceStatus.OK) {
        console.log({ results });
      }
    });
  };

  const searchNearby = (map: any, center: any) => {
    const service = new google.maps.places.PlacesService(map);

    const request = {
      location: center,
      radius: "20000",
      type: ["restaurant"],
    };

    service.nearbySearch(request, (results: any, status: any) => {
      if (status === google.maps.places.PlacesServiceStatus.OK) {
        console.log({ results });
      }
    });
  };

  const onMapReady = (_: any, map: any) => {
    setMap(map);
    searchNearby(map, map.center);
  };

  // -------------------------------------------------
  // Render
  // -------------------------------------------------
  return (
    <Map
      google={google}
      centerAroundCurrentLocation
      onReady={onMapReady}
      onRecenter={onMapReady}
    />
  );
};

export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_GOOGLE_API_KEY as string,
  language: "pt-BR",
})(MapContainer);
