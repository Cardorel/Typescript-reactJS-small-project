type dataType = {
    id : number,
    productName : string,
    productDescription : string,
    price: number,
    device : string,
    quantity: number,
    image : string,
    volume : 
        {
           volumeValue : string,
           isChecked : boolean,
           unit : string,
           coefficient : number
        }[]
    ,
   isNew: boolean,
   isUserBought: boolean,
   color: {
       colorFirst : string,
       colorSecond : string,
       colorThird : string
   }
}

export const handleDecrement = (datas : dataType[] , newData : dataType[] , id : number)=> {
    //get initial price
    let price = datas!.find((d) => d.id === id)!.price;
    //reset all the check input when user click in the - btn
    newData!.find((d) => d.id === id)!.volume[0].isChecked = true;
    newData!.find((d) => d.id === id)!.volume[1].isChecked = false;
    newData!.find((d) => d.id === id)!.volume[2].isChecked = false;
    //get the new array 
    let newItems = newData.map((data) => {
        //check if the id is the same and be sure the quantity can't be less than 1
      if (data.id == id && data.quantity > 1) {
        return {
            //return all preview value
          ...data,
          //decrement the quantity
          quantity: data.quantity - 1,
          //set the price when quantity changed
          price: price * (data.quantity - 1),
        };
      }
      //if something doesn't change => return iniat value
      return data;
    });
//return the new item array
    return newItems;

}