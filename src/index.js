import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Slider from "./componentes/Slider";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Slider />
    <App />
  </React.StrictMode>
);

reportWebVitals();
