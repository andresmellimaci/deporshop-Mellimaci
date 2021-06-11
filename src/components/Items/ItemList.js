import React, { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import { Item } from "./Item";
import "./ItemList.css";

export const ItemList = () => {
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
    <div>
      {isLoading && (
        <Spinner animation="border" role="status">
          <span className="sr-only">Cargando lista de productos...</span>
        </Spinner>
      )}

      {!isLoading && (
        <div className="products">
          {products.map((product, i) => {
            return (
              <Item
                key={i}
                id={product.id}
                title={product.title}
                description={product.description}
                price={product.price}
                pictureUrl={product.pictureUrl}
              />
            );
          })}
        </div>
      )}
    </div>
  );
};
