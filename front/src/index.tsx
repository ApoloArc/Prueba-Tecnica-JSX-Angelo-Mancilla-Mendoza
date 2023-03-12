import React, { ReactHTMLElement } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
// para el ruteo
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { routes } from "./Routes/routes";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  // Englobamos el componente para proveer la data
  <BrowserRouter>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </BrowserRouter>
);
