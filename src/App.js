import React from "react";
import { ItemListContainer } from "./components/ItemListContainer.js";
// import { ListaProductos } from "./components/ListaProductos.js";
import { NavBar } from "./components/NavBar.js";

function App() {
  return (
    <div>
      <NavBar />
      <ItemListContainer greeting="Bienvenido a DeporShop" />
    </div>
  );
}

export default App;
