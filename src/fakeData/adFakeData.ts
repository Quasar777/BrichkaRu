import { AdInfo } from "../types/AdInfo";


export const AdInfoData: AdInfo[] = [
    {
        id: 1,
        dealerId: 2,
        carId: 1,
        description:`Новый, не битый не крашеный. Коробка чуть стучит, а так понторезка хорошая.
                                \n
                                Обмен не рассматириваю (ТОЛЬКО НА ПРИОРУ!!!) 
                                \n                                
                                Звоните, пишите! `,
        publishDate: new Date(),
        adStatus: "active",
        numberOfViews: 2,
        marketPriceStatus: "выше рынка",
        addedToFavourites: 2
    },
    {
        id: 2,
        dealerId: 1,
        carId: 2,
        description: "Нормальная калина, че тут можно сказать.",
        publishDate: new Date(),
        adStatus: "active",
        numberOfViews: 1,
        marketPriceStatus: "хорошая",
        addedToFavourites: 0
    },

]