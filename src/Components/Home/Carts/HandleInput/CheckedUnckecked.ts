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
   color: {
       colorFirst : string,
       colorSecond : string,
       colorThird : string
   }
}


export const CheckedUnchecked = (newItems: dataType[] , index : number , indexItems : number) =>{
    newItems[indexItems].volume[index].isChecked = !newItems[indexItems].volume[
        index
      ].isChecked;
}