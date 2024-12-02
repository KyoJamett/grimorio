import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter } from "react-router-dom"; // Cambiar a HashRouter
import { MainApp } from "./MainApp.jsx";
import "./styles.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HashRouter>
      <MainApp />
    </HashRouter>
  </React.StrictMode>
);
