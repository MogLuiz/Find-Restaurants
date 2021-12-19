// Packages
import React from "react";
import ReactDOM from "react-dom";

// Components
import App from "./App";

// GlobalStyles
import GlobalStyles from "./styles/GlobalStyles";
import "@material/react-text-field/dist/text-field.css";
import "@material/react-material-icon/dist/material-icon.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyles />
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
