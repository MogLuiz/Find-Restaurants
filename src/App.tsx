// Packages
import React from "react";

// Components
import Home from "./pages/Home";

// Theme
import theme from "./styles/theme/theme";
import { ThemeProvider } from "styled-components";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Home />
    </ThemeProvider>
  );
}

export default App;
