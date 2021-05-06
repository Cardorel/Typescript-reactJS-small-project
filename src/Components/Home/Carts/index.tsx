import React, { useState } from "react";
import { datas } from "../../../Data";
import EachProduct from "../EachProduct";
import { CheckedUnchecked } from "./HandleInput/CheckedUnckecked";
import { handleIcrement } from "./Increment";
import { handleDecrement } from "./decrement";
import { mouseOut } from "./mouseOut";
import { mouseOver } from "./mouseOver";



function Products() {
  const [newData, setNewData] = useState(datas);

  const handleMouseOver = (index: number) => {
    var selectItems : NodeListOf<HTMLSelectElement> = document.querySelectorAll("select");
    mouseOver(selectItems , index)
  };

  const handleMouseOut = (index: number) => {
    var selectItems : NodeListOf<HTMLSelectElement> = document.querySelectorAll("select");
    mouseOut(selectItems , index);
  };

  const handleIncremntPrice = (id: number) => {
    let newItems = handleIcrement(datas , newData , id);
    setNewData(newItems);
  };

  const handledecrimentPrice = (id: number) => {
    let newItems = handleDecrement(datas , newData , id);
    setNewData(newItems);
  }

  const handleInputsChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number,
    indexItems: number
  ) => {
    //always get new data
    let newItems = [...newData];
    //get the initial price
    let price = datas!.find((d) => d.id === newItems[indexItems].id)!.price;
    //get id
    let id = datas!.find((d) => d.id === newItems[indexItems].id)!.id;
    //empty array for pushing the coefficient
    var arrayOfCoefficient: string[] = [];
    //handle check input function
    CheckedUnchecked(newItems , index , indexItems)
    //Handle price, change the price when user check input is checked
    newItems[indexItems].volume.forEach((element) => {
      //be sure sure that the price can be changed if the input is checked
      if (element.isChecked) {
        //Put the coefficient
        arrayOfCoefficient.push(element.coefficient.toString());
        //set the incoming items with the new price
        newItems = newData.map((data) => {
          //check if the id is sanme
          if (data.id === id) {
            return {
              ...data,
              price:
                (price * (parseFloat(arrayOfCoefficient[0])|| 1) +
                  price * (parseFloat(arrayOfCoefficient[1]) || 0) +
                  price * (parseFloat(arrayOfCoefficient[2]) || 0)) *
                data.quantity,
            };
          }
          return data;
        });
      } 
    });
    //set the new items in the state for changing the userinterface
    setNewData(newItems);
  };

  const handleSubmitProduc = (id: number) => {
    var btnsContainer = document.querySelectorAll(".btn-buy-style")
    var newItems = newData.map((item , index)  => {
      if(item.id === id)
      {
        btnsContainer[index].classList.add("btnPosition");
        return {
          ...item,
          isUserBought: true
        }
      }
      return item;
    })
    setNewData(newItems)
  }


  return (
    <div className="product-container">
      {newData?.map((data, index) => (
        <EachProduct
          key={data.id}
          index={index}
          {...data}
          handleMouseOver={handleMouseOver}
          handleMouseOut={handleMouseOut}
          handleIncremntPrice={handleIncremntPrice}
          handledecrimentPrice={handledecrimentPrice}
          handleInputsChange={handleInputsChange}
          handleSubmitProduct={handleSubmitProduc}
        />
      ))}
    </div>
  );
}

export default Products;
