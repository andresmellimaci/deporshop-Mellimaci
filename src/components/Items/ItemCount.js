import React, { useState } from "react";
import { Card } from "react-bootstrap";
import RemeraImage from "../../assests/images/remera-deportiva-gris.jpg";

export const ItemCount = ({ stock, initial, onAdd }) => {
  const [cantidad, setCantidad] = useState(initial);

  const handleAddCantidad = () => {
    if (cantidad < stock) {
      setCantidad(cantidad + 1);
    }
  };

  const handleRemoveCantidad = () => {
    if (cantidad > 0) {
      setCantidad(cantidad - 1);
    }
  };

  return (
    <div>
      <Card style={{ width: "18rem", textAlign: "center" }}>
        <Card.Img variant="top" src={RemeraImage} />
        <Card.Body>
          <Card.Title>Remera Deportiva</Card.Title>
          <div className="input-group mb-3">
            <button
              className="btn btn-outline-secondary"
              type="button"
              onClick={() => handleRemoveCantidad()}
            >
              -
            </button>
            <input
              type="text"
              className="form-control text-center"
              value={cantidad}
              readOnly
            />
            <button
              className="btn btn-outline-secondary"
              type="button"
              onClick={() => handleAddCantidad()}
            >
              +
            </button>
          </div>
          <span>Stock: {stock}</span>
          <hr />
          <button
            className="btn btn-primary"
            disabled={stock === 0 || cantidad === 0}
            onClick={() => onAdd(cantidad)}
          >
            Agregar al Carrito
          </button>
        </Card.Body>
      </Card>
    </div>
  );
};
