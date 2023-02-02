import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { PokemonList } from "./components/PokemonList";
import { PokemonCard } from "./components/PokemonCard";
import { Ball } from "./components/Ball";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="/" element={<Ball />} />
          <Route path="/home" element={<PokemonList />} />
        </Route>
        <Route path="/PokemonCard/:name" element={<PokemonCard />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
