import React, { useContext, useEffect, useState } from "react";
import { Nav, Navbar, Form } from "react-bootstrap";
import { CartWidget } from "./CartWidget/CartWidget";
import { NavLink } from "react-router-dom";
import CartContext from "../../context/CartContext";
import { getFirestore } from "../../factory/Firebase";

export const NavBar = () => {
  const { cart } = useContext(CartContext);
  const [categories, setCategories] = useState([]);

  let cartQuantity = cart.reduce(function (prev, cur) {
    return prev + cur.quantity;
  }, 0);

  useEffect(() => {
    const db = getFirestore();
    const itemCollection = db.collection("items");

    itemCollection
      .get()
      .then((querySnapshot) => {
        setCategories([...new Set(querySnapshot.docs.map((doc) => doc.data().categoryId))]);
      })
      .catch((error) => {
        console.log("Error obteniendo lista de categorias", error);
      });
  }, []);

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
            <CartWidget cartLength={cartQuantity} />
          </Form>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};
