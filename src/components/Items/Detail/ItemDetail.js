import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { ItemCount } from "./ItemCount";
import "./ItemDetail.css";

export const ItemDetail = ({ item }) => {
  const [cantidadProducto, setCantidadProducto] = useState(0);

  const onAdd = (cantidadSeleccionada) => {
    setCantidadProducto(cantidadSeleccionada);
  };

  return (
    <div className="col-lg-8 border p-3 main-section bg-white animate__animated animate__fadeIn">
      <div className="row m-0">
        <div className="col-lg-4 left-side-product-box pb-3">
          <img src={item.pictureUrl} className="border p-3" alt="" />
          <span className="sub-img">
            <img
              src="https://sporting.vteximg.com.br/arquivos/ids/187086-1500-1500/SADSDDDA.jpg?v=636967267027130000"
              className="border p-2"
              alt=""
            />
            <img
              src="https://sporting.vteximg.com.br/arquivos/ids/187087-1500-1500/SADASDSADAD.jpg?v=636967269789900000"
              className="border p-2"
              alt=""
            />
            <img
              src="https://sporting.vteximg.com.br/arquivos/ids/187092-1500-1500/WQEQWE.jpg?v=636967270697470000"
              className="border p-2"
              alt=""
            />
          </span>
        </div>
        <div className="col-lg-8">
          <div className="right-side-pro-detail border p-3 m-0">
            <div className="row">
              <div className="col-lg-12">
                <p className="m-0 p-0">{item.title}</p>
              </div>
              <div className="col-lg-12">
                <p className="m-0 p-0 price-pro">${item.price}</p>
                <hr className="p-0 m-0" />
              </div>
              <div className="col-lg-12 pt-2">
                <span>{item.description}</span>
                <hr className="m-0 pt-2 mt-2" />
              </div>
              {cantidadProducto <= 0 ? (
                <div className="col-lg-12">
                  <ItemCount stock={20} initial={1} onAdd={onAdd} />
                </div>
              ) : (
                <div className="col-lg-12" style={{ textAlign: "center" }}>
                  Cantidad seleccionada: {cantidadProducto}
                  <hr></hr>
                  <NavLink
                    className="btn btn-primary"
                    exact to={'/cart'}
                  >
                    Terminar mi compra
                  </NavLink>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
