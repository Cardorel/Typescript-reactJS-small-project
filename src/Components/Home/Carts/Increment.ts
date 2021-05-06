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



export const handleIcrement = (datas : dataType[] , newData : dataType[] , id : number)=> {
    let price = datas!.find((d) => d.id === id)!.price;
    newData!.find((d) => d.id === id)!.volume[0].isChecked = true;
    newData!.find((d) => d.id === id)!.volume[1].isChecked = false;
    newData!.find((d) => d.id === id)!.volume[2].isChecked = false;
    let newItems = newData.map((data) => {
      if (data.id === id) {
        return {
          ...data,
          quantity: data.quantity + 1,
          price: price * (data.quantity + 1),
        };
      }
      return data;
    });

    return newItems;

}