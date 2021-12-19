// Packages
import React, { useState } from "react";

// Assets
import logo from "../../assets/logo.svg";
import restaurants from "../../assets/restaurante-fake.png";

// Utils
import { carouselSettings } from "./utils";

// Components
import TextField, { Input } from "@material/react-text-field";
import MaterialIcon from "@material/react-material-icon";
import ImageCard from "../../components/ImageCard";
import Slider from "react-slick";

// Styles
import { Container, Search, Logo, Wrapper, Map, CarouselTitle } from "./styles";

const Home: React.FC = () => {
  // -------------------------------------------------
  // States
  // -------------------------------------------------

  const [searchInputValue, setSearchInputValue] = useState("");

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
            />
          </TextField>
          <CarouselTitle>Na sua área</CarouselTitle>
          <Slider {...carouselSettings}>
            <ImageCard photo={restaurants} />
            <ImageCard photo={restaurants} />
            <ImageCard photo={restaurants} />
            <ImageCard photo={restaurants} />
            <ImageCard photo={restaurants} />
            <ImageCard photo={restaurants} />
          </Slider>
        </Search>
      </Container>
      <Map />
    </Wrapper>
  );
};

export default Home;
