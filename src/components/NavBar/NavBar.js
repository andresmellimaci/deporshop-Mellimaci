import React, { useContext } from "react";
import { Nav, Navbar, Form } from "react-bootstrap";
import { CartWidget } from "./CartWidget/CartWidget";
import { NavLink } from "react-router-dom";
import { productList } from "./../Utils/ProductList";
import CartContext from "../../context/CartContext";

export const NavBar = () => {

  const {cart} = useContext(CartContext);
  
  let cartQuantity = cart.reduce(function(prev, cur) {
    return prev + cur.quantity;
  }, 0);

  const categories = [
    ...new Set(productList.map((product) => product.category)),
  ];

  return (
    <>
      <Navbar bg="dark" variant="dark" expand="lg">
        <NavLink className="navbar-brand" exact to={"/"}>
          DeporShop
        </NavLink>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            {categories.map((category) => {
              return (
                <NavLink
                  key={category}
                  className="nav-link text-capitalize"
                  exact
                  to={`/category/${category}`}
                >
                  {category}
                </NavLink>
              );
            })}
          </Nav>
          <Form inline>
            <CartWidget cartLength={cartQuantity}/>
          </Form>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};
