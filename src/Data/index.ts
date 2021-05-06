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
    isUserBought : boolean,
    color: {
        colorFirst : string,
        colorSecond : string,
        colorThird : string
    }
 }


 export const datas : dataType[] = [
    {
        id : 1,
        productName : "Shamppoing",
        productDescription : "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo impedit quibusdam, ex nemo magni aliquam adipisci beatae reprehenderit!",
        price : 200,
        device : "Грн",
        quantity : 1,
        image : "https://i.ibb.co/Z8BPHjB/pexels-alina-vilchenko-7356372.jpg",
        volume : [
            {
                volumeValue : "100",
                isChecked : true,
                unit : "Мл",
                coefficient : 1
            },
            {
                volumeValue : "200",
                isChecked : false,
                unit : "Мл",
                coefficient : 1.6
            },
            {
                volumeValue : "300",
                isChecked : false,
                unit : "Мл",
                coefficient : 2.1
            }
        ],
        isNew : false,
        isUserBought: false,
        color : {
            colorFirst : "Желтый",
            colorSecond : "Красный",
            colorThird : "Зеленый",
        }
    },
    {
        id : 2,
        productName : "Shamppoing",
        productDescription : "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo impedit quibusdam, ex nemo magni aliquam adipisci beatae reprehenderit!",
        price : 350,
        device : "Грн",
        quantity : 1,
        image : "https://i.ibb.co/7Gd9ZZy/shampooing-1.jpg",
        volume : [
            {
                volumeValue : "100",
                isChecked : true,
                unit : "Мл",
                coefficient : 1
            },
            {
                volumeValue : "200",
                isChecked : false,
                unit : "Мл",
                coefficient : 1.6
            },
            {
                volumeValue : "300",
                isChecked : false,
                unit : "Мл",
                coefficient : 2.1
            }
        ],
        isNew : true,
        isUserBought: false,
        color : {
            colorFirst : "Желтый",
            colorSecond : "Красный",
            colorThird : "Зеленый",
        }
    },
    {
        id : 3,
        productName : "Shamppoing Bio",
        productDescription : "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo impedit quibusdam, ex nemo magni aliquam adipisci beatae reprehenderit!",
        price : 280,
        device : "Грн",
        quantity : 1,
        image : "https://i.ibb.co/MN78t2N/shampooing-2.jpg",
        volume : [
            {
                volumeValue : "100",
                isChecked : true,
                unit : "Мл",
                coefficient : 1
            },
            {
                volumeValue : "200",
                isChecked : false,
                unit : "Мл",
                coefficient : 1.6
            },
            {
                volumeValue : "300",
                isChecked : false,
                unit : "Мл",
                coefficient : 2.1
            }
        ],
        isNew : false,
        isUserBought: false,
        color : {
            colorFirst : "Желтый",
            colorSecond : "Красный",
            colorThird : "Зеленый",
        }
    },
    {
        id : 4,
        productName : "Solid soap",
        productDescription : "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo impedit quibusdam, ex nemo magni aliquam adipisci beatae reprehenderit!",
        price : 390,
        device : "Грн",
        quantity : 1,
        image : "https://i.ibb.co/kqNhzSg/pexels-pixabay-208483.jpg",
        volume : [
            {
                volumeValue : "100",
                isChecked : true,
                unit : "Мл",
                coefficient : 1
            },
            {
                volumeValue : "200",
                isChecked : false,
                unit : "Мл",
                coefficient : 1.6
            },
            {
                volumeValue : "300",
                isChecked : false,
                unit : "Мл",
                coefficient : 2.1
            }
        ],
        isNew : true,
        isUserBought: false,
        color : {
            colorFirst : "Желтый",
            colorSecond : "Красный",
            colorThird : "Зеленый",
        }
    },
    {
        id : 5,
        productName : "Soap",
        productDescription : "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo impedit quibusdam, ex nemo magni aliquam adipisci beatae reprehenderit!",
        price : 150,
        device : "Грн",
        quantity : 1,
        image : "https://i.ibb.co/x6r2RMD/pexels-vie-studio-4856889.jpg",
        volume : [
            {
                volumeValue : "100",
                isChecked : true,
                unit : "Мл",
                coefficient : 1
            },
            {
                volumeValue : "200",
                isChecked : false,
                unit : "Мл",
                coefficient : 1.6
            },
            {
                volumeValue : "300",
                isChecked : false,
                unit : "Мл",
                coefficient : 2.1
            }
        ],
        isNew : true,
        isUserBought: false,
        color : {
            colorFirst : "Желтый",
            colorSecond : "Красный",
            colorThird : "Зеленый",
        }
    },
    {
        id : 6,
        productName : "Liauid Soap",
        productDescription : "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo impedit quibusdam, ex nemo magni aliquam adipisci beatae reprehenderit!",
        price : 246,
        device : "Грн",
        quantity : 1,
        image : "https://i.ibb.co/34SS8Jk/pexels-2547449.jpg",
        volume : [
            {
                volumeValue : "100",
                isChecked : true,
                unit : "Мл",
                coefficient : 1
            },
            {
                volumeValue : "200",
                isChecked : false,
                unit : "Мл",
                coefficient : 1.6
            },
            {
                volumeValue : "300",
                isChecked : false,
                unit : "Мл",
                coefficient : 2.1
            }
        ],
        isNew : false,
        isUserBought: false,
        color : {
            colorFirst : "Желтый",
            colorSecond : "Красный",
            colorThird : "Зеленый",
        }
    }
]