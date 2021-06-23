import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Loading } from "../../Utils/Loading";
import { ItemDetail } from "./ItemDetail";
import { productList } from "../../Utils/ProductList";

export const ItemDetailContainer = () => {
  const [item, setItem] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    const getItems = new Promise((resolve, reject) => {
      // setTimeout(() => {
        // resolve(itemObject);
        resolve(productList.find((product) => product.id == id));
      // }, 2000);
    });

    getItems.then((res) => {
      setIsLoading(false);
      setItem(res);
    });
  }, [id]);

  return (
    <div className="container-fluid">
      {isLoading && (
        <Loading />
      )}

      {!isLoading && (
        <div>
          <ItemDetail item={item} />
        </div>
      )}
    </div>
  );
};
