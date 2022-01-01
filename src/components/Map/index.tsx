// Packages
import React, { useEffect, useState } from "react";

// Hooks
import { useDispatch, useSelector } from "react-redux";

// Action Creators
import { setRestaurants } from "../../store/modules/restaurants/actions";

// Google maps
import { GoogleApiWrapper, Map, Marker } from "google-maps-react";

// Types
import { IMapContainerProps, IMapState } from "./types";
import {
  IEstablishmentsSearched,
  IRestaurantState,
} from "../../store/modules/restaurants/types";
import { IStoreState } from "../../store/store";

export const MapContainer: React.FC<IMapContainerProps> = ({
  google,
  query,
  placeId,
  ...props
}) => {
  // -------------------------------------------------
  // State
  // -------------------------------------------------

  const [map, setMap] = useState<IMapState>();

  // -------------------------------------------------
  // Hooks
  // -------------------------------------------------
  const dispatch = useDispatch();

  const { restaurants } = useSelector<IStoreState, IRestaurantState>(
    (state) => state.restaurants
  );

  useEffect(() => {
    if (query) searchByQuery(query);
  }, [query]);

  useEffect(() => {
    if (placeId) getRestaurantById(placeId);
  }, [placeId]);

  // -------------------------------------------------
  // Functions
  // -------------------------------------------------

  const getRestaurantById = (placeId: string) => {
    const service = new google.maps.places.PlacesService(map);

    const request = {
      placeId,
      fields: [
        "name",
        "opening_hours",
        "formatted_address",
        "formatted_phone_number",
      ],
    };

    service.getDetails(request, (place: any, status: string) => {
      if (status === google.maps.places.PlacesServiceStatus.OK) {
        dispatch(setRestaurants(place));
      }
    });
  };

  const getRestaurantForQuery = (placeId: string) => {
    const service = new google.maps.places.PlacesService(map);

    const request = {
      placeId,
      fields: [
        "name",
        "opening_hours",
        "formatted_address",
        "formatted_phone_number",
      ],
    };

    service.getDetails(request, (place: any, status: string) => {
      if (status === google.maps.places.PlacesServiceStatus.OK) {
        dispatch(setRestaurants(place));
      }
    });
  };

  const searchByQuery = (query: string) => {
    const service = new google.maps.places.PlacesService(map);

    const request = {
      location: map.center,
      radius: "200",
      type: ["restaurant"],
      query,
    };

    service.textSearch(
      request,
      (results: IEstablishmentsSearched[], status: string) => {
        if (status === google.maps.places.PlacesServiceStatus.OK) {
          dispatch(setRestaurants(results));
        }
      }
    );
  };

  const searchNearby = (map: any, center: any) => {
    const service = new google.maps.places.PlacesService(map);

    const request = {
      location: center,
      radius: "20000",
      type: ["restaurant"],
    };

    service.nearbySearch(
      request,
      (results: IEstablishmentsSearched[], status: string) => {
        if (status === google.maps.places.PlacesServiceStatus.OK) {
          console.log({ results, status });
          dispatch(setRestaurants(results));
        }
      }
    );
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
      {...props}
    />
  );
};

export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_GOOGLE_API_KEY as string,
  language: "pt-BR",
})(MapContainer);
