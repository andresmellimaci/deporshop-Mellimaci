import React, { useEffect, useState } from "react";
import { ItemList } from "./ItemList";
import { useParams } from "react-router-dom";
import './ItemListContainer.css';
import { Loading } from "../../Utils/Loading";
import { productList } from "../../Utils/ProductList";

export const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    setIsLoading(true);
    const task = new Promise((resolve, reject) => {
      // setTimeout(() => {
        if (id === undefined) {
          resolve(productList);
        } else {
          resolve(productList.filter((product) => product.category == id));
        }
      // }, 2000);
    });

    task.then((res) => {
      setIsLoading(false);
      setProducts(res);
    });
  }, [id]);

  return (
    <div className="container-fluid">
      {isLoading && (
        <Loading />
      )}

      {!isLoading && products.length > 0 &&
          (
            <div>
              <ItemList products={products} />
            </div>
          )}

      {!isLoading && products.length === 0 && <p>No hay resultados</p>}
    </div>
  );
};
