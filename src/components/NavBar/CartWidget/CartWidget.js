import React from "react";
import { Cart } from "react-bootstrap-icons";
import { NavLink } from "react-router-dom";
import "./CartWidget.css";

export const CartWidget = ({ cartLength }) => {
  return (
    <NavLink className="cart-icon" exact to="/cart">
      <span>{cartLength}</span>
      <Cart color="white" size={30} />
    </NavLink>
  );
};
