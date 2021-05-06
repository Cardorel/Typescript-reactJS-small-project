export const mouseOut = (selectItems : NodeListOf<HTMLSelectElement> , index : number) =>{
    //loop my selects and set the size of select to 0
    for (let i = 0; i < selectItems.length; i++) {
        selectItems[index].size = 0;
      }
}