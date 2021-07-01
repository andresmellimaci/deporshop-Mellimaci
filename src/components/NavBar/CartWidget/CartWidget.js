import React from "react";
import { Cart } from "react-bootstrap-icons";
import { NavLink } from "react-router-dom";
import "./CartWidget.css";
// import Cart from '../../../assests/icons/cart.svg';

export const CartWidget = ({cartLength}) => {
  return (
    <div className="cart-icon">
      <span>{cartLength}</span>
      <NavLink exact to="/cart">
        <Cart color="white" size={30} />
      </NavLink>
    </div>
  );
};
