import React from "react";
import { ItemListContainer } from "../Items/ItemListContainer.js";
import { NavBar } from "../NavBar/NavBar.js";

function Main() {
  return (
    <div>
      <NavBar />
      <ItemListContainer greeting="Bienvenido a DeporShop" />
    </div>
  );
}

export default Main;
