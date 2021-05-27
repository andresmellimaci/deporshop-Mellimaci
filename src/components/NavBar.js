import React from "react";
import { Nav, Navbar } from "react-bootstrap";

export const NavBar = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">DeporShop</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="#remeras">Remeras</Nav.Link>
          <Nav.Link href="#pantalones">Pantalones</Nav.Link>
          <Nav.Link href="#buzos">Buzos</Nav.Link>
          <Nav.Link href="#calzado">Calzado</Nav.Link>
        </Nav>
      </Navbar>
    </>
  );
};
