import React from "react";
import { Cart } from "react-bootstrap-icons";
import { NavLink } from "react-router-dom";
import "./CartWidget.css";
// import Cart from '../../../assests/icons/cart.svg';

export const CartWidget = () => {
  return (
    <div className="cart-icon">
      <span>0</span>
      <NavLink to="/cart">
        <Cart color="white" size={30} />
      </NavLink>
    </div>
  );
};
