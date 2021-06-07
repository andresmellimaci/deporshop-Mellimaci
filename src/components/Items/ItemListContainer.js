import React from "react";
import { ItemCount } from "./ItemCount";

export const ItemListContainer = ({ greeting }) => {
  const onAdd = (cantidadSeleccionada) => {
    console.log(`Cantidad seleccionada: ${cantidadSeleccionada}`);
  };

  return (
    <div>
      <p>{greeting}</p>
      <ItemCount stock={20} initial={1} onAdd={onAdd} />
    </div>
  );
};
