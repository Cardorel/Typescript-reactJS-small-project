import React from "react";
import CheckInput from "./CheckInput";
import SelectColor from "./SelectColor";
import "../SCSS/cardFooter.style.scss";
import HeaderCard from "./HeaderCard";
import CardCenter from "./CardCenter";

type dataType = {
  id: number;
  productName: string;
  productDescription: string;
  price: number;
  device: string;
  quantity: number;
  index: number;
  image: string;
  volume: {
    volumeValue: string;
    isChecked: boolean;
    unit: string;
    coefficient: number;
  }[];
  isNew: boolean;
  isUserBought: boolean;
  color: {
    colorFirst: string;
    colorSecond: string;
    colorThird: string;
  };
  handleMouseOut: (index: number) => void;
  handleMouseOver: (index: number) => void;
  handleIncremntPrice: (id: number) => void;
  handledecrimentPrice: (id: number) => void;
  handleSubmitProduct: (id: number) => void;
  handleInputsChange: (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number,
    indexItems: number
  ) => void;
};

export default function EachProduct(props: dataType) {
  const {
    id,
    productName,
    productDescription,
    price,
    device,
    quantity,
    image,
    volume,
    isNew,
    isUserBought,
    color,
    index,
    handleSubmitProduct,
    handleMouseOut,
    handleMouseOver,
    handleIncremntPrice,
    handledecrimentPrice,
    handleInputsChange,
  } = props;
  return (
    <div className="product-content">
      <HeaderCard isNew={isNew} image={image} isUserBought={isUserBought} productName={productName} />
      <CardCenter
        productName={productName}
        productDescription={productDescription}
      />
      {!isUserBought && (
        <div className="card-footer">
          <div className="card-color-price-content">
            <SelectColor
              color={color}
              handleMouseOut={handleMouseOut}
              index={index}
              handleMouseOver={handleMouseOver}
            />
            <p className="price-style">
              {price} {device}
            </p>
          </div>
          <CheckInput
            indexItems={index}
            handleInputsChange={handleInputsChange}
            volume={volume}
          />
        </div>
      )}
      <div className="quantity-btn-content">
        {!isUserBought && (
          <div className="quantity-container">
            <div className="quantity-content">
              <button
                className="decremnt-quantity-style"
                onClick={() => handledecrimentPrice(id)}
              >
                -
              </button>
              <span>{quantity}</span>
              <button
                onClick={() => handleIncremntPrice(id)}
                className="incremnt-quantity-style"
              >
                +
              </button>
            </div>
          </div>
        )}
        <div className="btn-buy-style">
          <button onClick={() => handleSubmitProduct(id)} className="btn-buy">
            Купить
          </button>
        </div>
      </div>
    </div>
  );
}
