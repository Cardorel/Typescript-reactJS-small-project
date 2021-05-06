import React from "react";

export default function CardCenter(props: {
  productName: string;
  productDescription: string;
}) {
  const { productDescription, productName } = props;

  return (
    <div className="card-center">
      <h2 className="productName">{productName}</h2>
      <p className="productDescription">{productDescription}</p>
    </div>
  );
}
