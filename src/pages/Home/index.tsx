// Packages
import React from "react";

// Assets
import logo from "../../assets/logo.svg";

// Styles
import { Container, Search } from "./styles";

const Home: React.FC = () => {
  return (
    <Container>
      <Search>
        <img src={logo} alt="Logo da aplicação" />
      </Search>
    </Container>
  );
};

export default Home;
