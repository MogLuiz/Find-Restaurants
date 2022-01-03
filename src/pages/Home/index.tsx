// Packages
import React, { useState, useEffect } from "react";

// Assets
import logo from "../../assets/logo.svg";
import restaurant from "../../assets/restaurante-fake.png";

// Utils
import { carouselSettings } from "./utils";

// Hooks
import { useSelector } from "react-redux";

// Components
import TextField, { Input } from "@material/react-text-field";
import MaterialIcon from "@material/react-material-icon";
import ImageCard from "../../components/ImageCard";
import RestaurantCard from "../../components/RestaurantCard";
import Map from "../../components/Map";
import Modal from "../../components/Modal";

// Styles
import {
  Container,
  Carousel,
  Search,
  Logo,
  Wrapper,
  CarouselTitle,
} from "./styles";

// Types
import { IStoreState } from "../../store/store";
import {
  IEstablishmentsSearched,
  IRestaurantState,
} from "../../store/modules/restaurants/types";

const Home: React.FC = () => {
  const { restaurants, restaurantSelected } = useSelector<
    IStoreState,
    IRestaurantState
  >((state) => state.restaurants);

  // -------------------------------------------------
  // States
  // -------------------------------------------------

  const [searchInputValue, setSearchInputValue] = useState("");
  const [isOpenedModal, setIsOpenedModal] = useState(false);
  const [query, setQuery] = useState("");
  const [placeId, setPlaceId] = useState("");

  // -------------------------------------------------
  // Functions
  // -------------------------------------------------

  const handleCloseModal = () => {
    setIsOpenedModal(!isOpenedModal);
  };

  const handleOpenModal = (placeId: string) => {
    setPlaceId(placeId);
    setIsOpenedModal(true);
  };

  const handleKeyPress = (e: any) => {
    if (e.key === "Enter") setQuery(searchInputValue);
  };

  // -------------------------------------------------
  // Render
  // -------------------------------------------------
  return (
    <Wrapper>
      <Container>
        <Search>
          {/* <Logo src={logo} alt="Logo da aplicação" /> */}
          <TextField
            label="Pesquisar Restaurantes"
            outlined
            trailingIcon={<MaterialIcon role="button" icon="search" />}
          >
            <Input
              value={searchInputValue}
              onChange={(e: any) => setSearchInputValue(e.target.value)}
              onKeyPress={handleKeyPress}
            />
          </TextField>
          <CarouselTitle>Na sua área</CarouselTitle>
          <Carousel {...carouselSettings}>
            {restaurants?.map((restaurant: IEstablishmentsSearched) => (
              <ImageCard key={restaurant.place_id} restaurant={restaurant} />
            ))}
          </Carousel>
        </Search>
        {restaurants?.map((restaurant: IEstablishmentsSearched) => (
          <RestaurantCard
            restaurant={restaurant}
            key={restaurant.place_id}
            onClick={() => handleOpenModal(restaurant.place_id)}
          />
        ))}
      </Container>
      <Map query={query} placeId={placeId} />
      <Modal open={isOpenedModal} onClose={handleCloseModal}>
        <p>{restaurantSelected?.name}</p>
        <p>{restaurantSelected?.formatted_phone_number}</p>
        <p>{restaurantSelected?.formatted_address}</p>
      </Modal>
    </Wrapper>
  );
};

export default Home;
