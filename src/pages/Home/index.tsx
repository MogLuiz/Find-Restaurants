// Packages
import React, { useState } from "react";

// Assets
import logo from "../../assets/logo.svg";

// Components
import TextField, { Input } from "@material/react-text-field";
import MaterialIcon from "@material/react-material-icon";

// Styles
import { Container, Search, Logo, Wrapper, Map } from "./styles";

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
        </Search>
      </Container>
      <Map />
    </Wrapper>
  );
};

export default Home;
