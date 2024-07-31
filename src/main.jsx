import React from "react";
import ReactDOM from "react-dom/client";
import { CarritoApp } from './carritoApp';
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <React.StrictMode>
      <CarritoApp />
    </React.StrictMode>
  </BrowserRouter>
);
