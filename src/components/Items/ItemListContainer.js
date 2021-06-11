import React from "react";
import { ItemCount } from "./ItemCount";
import { ItemList } from "./ItemList";

export const ItemListContainer = ({ greeting }) => {
  const onAdd = (cantidadSeleccionada) => {
    console.log(`Cantidad seleccionada: ${cantidadSeleccionada}`);
  };

  

  return (
    <div className="container-fluid">
      <p>{greeting}</p>
      <ItemList />
      <ItemCount stock={20} initial={1} onAdd={onAdd} />
    </div>
  );
};
