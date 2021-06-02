import React from "react";
import { Nav, Navbar, Form } from "react-bootstrap";
import { CartWidget } from "./CartWidget/CartWidget";

export const NavBar = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Navbar.Brand href="#home">DeporShop</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#remeras">Remeras</Nav.Link>
            <Nav.Link href="#pantalones">Pantalones</Nav.Link>
            <Nav.Link href="#buzos">Buzos</Nav.Link>
            <Nav.Link href="#calzado">Calzado</Nav.Link>
          </Nav>
          <Form inline>
            <CartWidget />
          </Form>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};
