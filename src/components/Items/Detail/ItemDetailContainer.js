import React, { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import { ItemDetail } from "./ItemDetail";

export const ItemDetailContainer = () => {
  const [item, setItem] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const itemObject = {
    id: 1,
    title: "Remera Deportiva",
    description: "Remera deportiva Topper color gris",
    category: 1,
    price: 1500,
    pictureUrl:
      "https://sporting.vteximg.com.br/arquivos/ids/187085-1000-1000/DFDssas.jpg?v=636967265397900000",
  };

  useEffect(() => {
    const getItems = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(itemObject);
      }, 2000);
    });

    getItems.then((res) => {
      setIsLoading(false);
      setItem(res);
    });
  }, []);

  const onAdd = (cantidadSeleccionada) => {
    console.log(`Cantidad seleccionada: ${cantidadSeleccionada}`);
  };

  return (
    <div className="container-fluid">
      {isLoading && (
        <div class="d-flex justify-content-center">
          <Spinner animation="border" role="status">
            <span className="sr-only">Cargando lista de productos...</span>
          </Spinner>
        </div>
      )}

      {!isLoading && (
        <div>
          <ItemDetail item={item} onAdd={onAdd} />
        </div>
      )}
    </div>
  );
};
