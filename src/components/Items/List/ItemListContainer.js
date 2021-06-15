import React, { useEffect, useState } from "react";
import { ItemList } from "./ItemList";
import { Spinner } from "react-bootstrap";

export const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const productList = [
    {
      id: 1,
      title: "Remera Deportiva",
      description: "Remera deportiva Topper color gris",
      price: 1500,
      pictureUrl:
        "https://sporting.vteximg.com.br/arquivos/ids/187085-1000-1000/DFDssas.jpg?v=636967265397900000",
    },
    {
      id: 2,
      title: "Calza Deportiva",
      description: "Calza deportiva Adidas color negra",
      price: 1200,
      pictureUrl:
        "https://sporting.vteximg.com.br/arquivos/ids/215260-1000-1000/7FU2179-201.jpg?v=637432213635430000",
    },
    {
      id: 3,
      title: "Short Deportivo",
      description: "Short deportivo Puma color azul",
      price: 950,
      pictureUrl:
        "https://sporting.vteximg.com.br/arquivos/ids/263918-1000-1000/UAI0125-581-1.jpg?v=637527908664130000",
    },
  ];

  useEffect(() => {
    const task = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(productList);
      }, 2000);
    });

    task.then((res) => {
      setIsLoading(false);
      setProducts(res);
    });
  }, []);

  return (
    <div className="container-fluid">
      {isLoading && (
        <div className="d-flex justify-content-center">
          <Spinner animation="border" role="status">
            <span className="sr-only">Cargando lista de productos...</span>
          </Spinner>
        </div>
      )}

      {!isLoading && (
        <div>
          <p>{greeting}</p>
          <ItemList products={products} isLoading={isLoading} />
        </div>
      )}
    </div>
  );
};
