// Packages
import React from "react";
import ReactDOM from "react-dom";

// Components
import App from "./App";

// GlobalStyles
import GlobalStyles from "./styles/GlobalStyles";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyles />
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
