// Packages
import React, { useState } from "react";

// Assets
import logo from "../../assets/logo.svg";

// Components
import TextField, { Input } from "@material/react-text-field";

// Styles
import { Container, Search } from "./styles";

const Home: React.FC = () => {
  // -------------------------------------------------
  // States
  // -------------------------------------------------

  const [searchInputValue, setSearchInputValue] = useState("");

  // -------------------------------------------------
  // Render
  // -------------------------------------------------
  return (
    <Container>
      <Search>
        <img src={logo} alt="Logo da aplicação" />
        <TextField label="Pesquisar" outlined>
          <Input
            value={searchInputValue}
            onChange={(e: any) => setSearchInputValue(e.target.value)}
          />
        </TextField>
      </Search>
    </Container>
  );
};

export default Home;
