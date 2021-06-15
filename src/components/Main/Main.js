import React from "react";
import { ItemDetailContainer } from "../Items/Detail/ItemDetailContainer.js";
import { ItemListContainer } from "../Items/List/ItemListContainer.js";
import { NavBar } from "../NavBar/NavBar.js";
import { BrowserRouter, Route, Switch } from "react-router-dom";

function Main() {
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route exact path="/">
          <ItemListContainer greeting="Bienvenido a DeporShop" />
        </Route>
        <Route exact path="/category/:id">
          <ItemDetailContainer />
        </Route>
        <Route exact path="/item/:id">
          <ItemDetailContainer />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default Main;
