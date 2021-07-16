import React, { useContext, useState } from "react";
import CartContext from "../../context/CartContext";
import Table from "react-bootstrap/Table";
import { NavLink } from "react-router-dom";
import { Container } from "react-bootstrap";
import { getFirestore } from "../../factory/Firebase";
import firebase from "firebase/app";
import { Loading } from "../Utils/Loading";
import { PurchaseForm } from "../PurchaseForm/PurchaseForm";

export const Cart = () => {
  const { cart, clear, removeItem } = useContext(CartContext);
  const [loading, setLoading] = useState(false);
  const [order, setOrder] = useState({ id: "", generated: false });
  const [formData, setFormData] = useState({});

  var totalCompra = cart.reduce(function (prev, cur) {
    return prev + cur.item.price * cur.quantity;
  }, 0);

  const finalizarCompra = () => {
    setLoading(true);
    const db = getFirestore();
    const orders = db.collection("orders");

    const buyer = {
      email: formData.email || '',
      name: formData.name || '',
      phone: formData.phone || '',
    };

    const newOrder = {
      buyer: buyer,
      items: cart,
      date: firebase.firestore.Timestamp.fromDate(new Date()),
      total: totalCompra,
    };

    orders
      .add(newOrder)
      .then(({ id }) => {
        console.log("Order guardada con exito", id);
        setOrder({ id: id, generated: true });
        clear();
      })
      .catch((error) => {
        console.log("Error al guardar la orden", error);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <Container fluid>
      {!loading ? (
        cart.length > 0 ? (
          <div>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>Producto</th>
                  <th>Precio Unitario</th>
                  <th>Cantidad</th>
                  <th>Total Producto</th>
                  <th>Accion</th>
                </tr>
              </thead>
              <tbody>
                {cart.map((element) => {
                  return (
                    <tr>
                      <td>{element.item.title}</td>
                      <td>{element.item.price}</td>
                      <td>{element.quantity}</td>
                      <td>{element.item.price * element.quantity}</td>
                      <td>
                        <button
                          className="btn btn-danger"
                          onClick={() => removeItem(element.item.id)}
                        >
                          Eliminar
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </Table>
            <div className="row">
              <div className="col-9">
                <button className="btn btn-info" onClick={() => clear()}>
                  Vaciar carrito
                </button>
              </div>
              <div className="col-3">
                <h3>Total Compra: {totalCompra}</h3>
              </div>
            </div>
            <hr></hr>
            <PurchaseForm finalizarCompra={finalizarCompra} formData={formData} setFormData={setFormData} />
          </div>
        ) : (
          <div>
            {order.generated ? (
              <>
                <h2>Compra finalizada con exito.</h2>
                <p>Orden ID: {order.id}</p>
              </>
            ) : (
              <p>El carrito está vacío.</p>
            )}
            <NavLink className="btn btn-primary" exact to={"/"}>
              Volver a la lista de productos
            </NavLink>
          </div>
        )
      ) : (
        <Loading />
      )}
    </Container>
  );
};
