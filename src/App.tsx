// Packages
import React from "react";

// Components
import Home from "./pages/Home";

// Theme
import theme from "./styles/theme/theme";
import { ThemeProvider } from "styled-components";

// Redux Provider
import { Provider } from "react-redux";

// Redux Store
import store from "./store/store";

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Home />
      </ThemeProvider>
    </Provider>
  );
}

export default App;
