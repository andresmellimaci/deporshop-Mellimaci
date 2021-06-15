import React from "react";
import { Nav, Navbar, Form } from "react-bootstrap";
import { CartWidget } from "./CartWidget/CartWidget";
import { NavLink } from "react-router-dom";

export const NavBar = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark" expand="lg">
        <NavLink className="navbar-brand" exact to={'/'}>DeporShop</NavLink>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <NavLink className="nav-link" exact to={'/'} activeClassName="">Remeras</NavLink>
            <NavLink className="nav-link" exact to={'/'} activeClassName="">Pantalones</NavLink>
            <NavLink className="nav-link" exact to={'/'} activeClassName="">Buzos</NavLink>
            <NavLink className="nav-link" exact to={'/'} activeClassName="">Calzado</NavLink>
          </Nav>
          <Form inline>
            <CartWidget />
          </Form>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};
