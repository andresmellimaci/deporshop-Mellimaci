import React from "react";
import { Form } from "react-bootstrap";

export const PurchaseForm = ({ finalizarCompra, formData, setFormData }) => {
  return (
    <Form>
      <Form.Group>
        <Form.Label>Nombre</Form.Label>
        <Form.Control
          type="name"
          placeholder="Ingrese Nombre"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        />
      </Form.Group>

      <Form.Group>
        <Form.Label>Telefono</Form.Label>
        <Form.Control
          type="phone"
          placeholder="Ingrese Telefono"
          value={formData.phone}
          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
        />
      </Form.Group>
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control
          type="email"
          placeholder="Ingrese Email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />
      </Form.Group>
      <Form.Group>
        <button
          type="button"
          className="btn btn-primary"
          onClick={() => finalizarCompra()}
        >
          Finalizar compra
        </button>
      </Form.Group>
    </Form>
  );
};
