import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import GlobalStyle from "./styles/globalStyles.js";
import FontStyles from "./styles/fontStyles.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GlobalStyle />
    <FontStyles />
    <App />
  </React.StrictMode>
);
