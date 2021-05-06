export const mouseOver = (selectItems : NodeListOf<HTMLSelectElement> , index: number) =>{
    for (let i = 0; i < selectItems.length; i++) {
        let element = selectItems[i];
        selectItems[index].size = element.options.length;
      }
}