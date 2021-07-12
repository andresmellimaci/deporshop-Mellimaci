import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getFirestore } from "../../../factory/Firebase";
import { Loading } from "../../Utils/Loading";
import { ItemDetail } from "./ItemDetail";

export const ItemDetailContainer = () => {
  const [item, setItem] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    const db = getFirestore();
    const itemCollection = db.collection("items");
    const item = itemCollection.doc(id);

    item
      .get()
      .then((doc) => {
        setItem({ id: doc.id, ...doc.data() });
      })
      .catch((error) => {
        console.log("Error al obtener un item", error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [id]);

  return (
    <div className="container-fluid">
      {isLoading && <Loading />}

      {!isLoading && (
        <div>
          <ItemDetail item={item} />
        </div>
      )}
    </div>
  );
};
