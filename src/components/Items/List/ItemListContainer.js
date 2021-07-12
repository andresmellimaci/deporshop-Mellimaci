import React, { useEffect, useState } from "react";
import { ItemList } from "./ItemList";
import { useParams } from "react-router-dom";
import "./ItemListContainer.css";
import { Loading } from "../../Utils/Loading";
import { getFirestore } from "../../../factory/Firebase";

export const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    setIsLoading(true);
    const db = getFirestore();
    let itemCollection = db.collection("items");

    if(id !== undefined){
      itemCollection = itemCollection.where('categoryId', '==', id);
    }

    itemCollection
      .get()
      .then((querySnapshot) => {
        setProducts(querySnapshot.docs.map((doc) => ({id: doc.id, ...doc.data()})));
      })
      .catch((error) => {
        console.log("Error obteniendo lista de items", error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [id]);

  return (
    <div className="container-fluid">
      {isLoading && <Loading />}

      {!isLoading && products.length > 0 && (
        <div>
          <ItemList products={products} />
        </div>
      )}

      {!isLoading && products.length === 0 && <p>No hay resultados</p>}
    </div>
  );
};
