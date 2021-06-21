import React from "react";
import { NavLink } from "react-router-dom";
import "./Item.css";

export const Item = ({ id, title, description, price, pictureUrl }) => {
  return (
    <NavLink exact to={`/item/${id}`}>
      <div className="product_card animate__animated animate__fadeIn">
        <img src={pictureUrl} alt="" />
        <div className="product_box">
          <h2 title={title}>{title}</h2>
          <span>${price}</span>
          <p>{description}</p>
        </div>
      </div>
    </NavLink>
  );
};
