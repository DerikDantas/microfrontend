import React from "react";
import { useParams } from "react-router-dom";

const ProductDetails: React.FC = () => {
  const { productId } = useParams();
  console.log(productId);

  return (
    <>
      <h1>products {productId ?? "sem id"}</h1>
    </>
  );
};

export default ProductDetails;
