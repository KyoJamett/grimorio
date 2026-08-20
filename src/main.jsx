import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter } from "react-router-dom"; // Cambiar a HashRouter
import { MainApp } from "./MainApp.jsx";
import "./styles.css";
import { FormatsProvider } from "./context/FormatsContext.jsx";
import { CardsProvider } from "./context/CardContext.jsx";
import ReactGA from "react-ga4";

ReactGA.initialize("G-TWH6M7XQ94");

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HashRouter>
      <FormatsProvider>
        <CardsProvider>
          <MainApp />
        </CardsProvider>
      </FormatsProvider>
    </HashRouter>
  </React.StrictMode>,
);
