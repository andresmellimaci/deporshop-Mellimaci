import React, { useContext } from "react";
import CartContext from "../../context/CartContext";
import Table from "react-bootstrap/Table";
import { NavLink } from "react-router-dom";

export const Cart = () => {
  const { cart, clear, removeItem } = useContext(CartContext);

  var totalCompra = cart.reduce(function (prev, cur) {
    return prev + cur.item.price * cur.quantity;
  }, 0);

  return (
    <>
      {cart.length > 0 ? (
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
          
        </div>
      ) : (
        <div>
          <p>El carrito está vacío.</p>
          <NavLink className="btn btn-primary" exact to={"/"}>
            Volver a la lista de productos
          </NavLink>
        </div>
      )}
    </>
  );
};
