import React from "react";
import { Item } from "./Item";
import "./ItemList.css";

export const ItemList = ({products}) => {

  return (
    <div>
      {
        <div className="products">
          {products.map((product, i) => {
            return (
              <Item
                key={i}
                id={product.id}
                title={product.title}
                description={product.description}
                price={product.price}
                pictureUrl={product.imageId}
              />
            );
          })}
        </div>
      }
    </div>
  );
};
