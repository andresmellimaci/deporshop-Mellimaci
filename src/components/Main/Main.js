import React from "react";
import { ItemDetailContainer } from "../Items/Detail/ItemDetailContainer.js";
import { ItemListContainer } from "../Items/List/ItemListContainer.js";
import { NavBar } from "../NavBar/NavBar.js";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Cart } from "../Cart/Cart";
import { CartProvider } from "../../providers/CartProvider.js";

function Main() {
  return (
    <CartProvider value={[]}>
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route exact path="/">
            <ItemListContainer greeting="Bienvenido a DeporShop" />
          </Route>
          <Route exact path="/category/:id">
            <ItemListContainer />
          </Route>
          <Route exact path="/item/:id">
            <ItemDetailContainer />
          </Route>
          <Route exact path="/cart">
            <Cart />
          </Route>
        </Switch>
      </BrowserRouter>
    </CartProvider>
  );
}

export default Main;
