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

const Home: React.FC = () => {
  const { restaurants } = useSelector((state: any) => state.restaurants);

  // -------------------------------------------------
  // States
  // -------------------------------------------------

  const [searchInputValue, setSearchInputValue] = useState("");
  const [query, setQuery] = useState("");
  const [isOpenedModal, setIsOpenedModal] = useState(false);

  // -------------------------------------------------
  // Functions
  // -------------------------------------------------

  const handleCloseModal = () => {
    setIsOpenedModal(!isOpenedModal);
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
          <Logo src={logo} alt="Logo da aplicação" />
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
            <ImageCard
              photo={restaurant}
              restaurantName="Nome do restaurante"
            />
            <ImageCard
              photo={restaurant}
              restaurantName="Nome do restaurante"
            />
            <ImageCard
              photo={restaurant}
              restaurantName="Nome do restaurante"
            />
            <ImageCard
              photo={restaurant}
              restaurantName="Nome do restaurante"
            />
            <ImageCard
              photo={restaurant}
              restaurantName="Nome do restaurante"
            />
            <ImageCard
              photo={restaurant}
              restaurantName="Nome do restaurante"
            />
          </Carousel>
          <button onClick={() => setIsOpenedModal(true)}>Abrir Modal</button>
        </Search>
        {restaurants.map((restaurant: any) => (
          <RestaurantCard restaurant={restaurant} />
        ))}
      </Container>
      <Map query={query} />
      <Modal open={isOpenedModal} onClose={handleCloseModal} />
    </Wrapper>
  );
};

export default Home;
