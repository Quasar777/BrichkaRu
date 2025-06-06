import { Car } from "../types/Car";
import { Dealer } from "../types/Dealer";

export const carFakeData: Car[] = [
  {
    id: 1,
    brand: "Bugatti",
    model: "Chiron",
    code: "chiron",
    locationCity: "Москва",
    locaionDistrict: "митино",
    pathToImage: "https://jetcar24.ru/wp-content/uploads/2024/07/5e7b7c235affe925d9166ba5d24b8fb9.jpg",
    year: 2020,
    price: 1_000_000_000,
    engineType: "бензиновый",
    enginePower: 1280,
    gearBoxType: "автомат",
    bodyType: "седан",
    steeringWheelPosition: "left",
    mileAge: 2300,
    engineVolume: 8,
    novelty: "newcars"
  },
  {
    id: 2,
    brand: "Lada",
    model: "Kalina",
    code: "kalina",
    locationCity: "Москва",
    locaionDistrict: "люблино",
    pathToImage: "https://s0.rbk.ru/v6_top_pics/media/img/3/47/754788599938473.jpeg",
    year: 2013,
    price: 240_000,
    engineType: "бензиновый",
    enginePower: 112,
    gearBoxType: "механика",
    bodyType: "седан",
    steeringWheelPosition: "left",
    mileAge: 150000,
    engineVolume: 1.7,
    novelty: "usedcars"
  },
  {
    id: 3,
    brand: "Range Rover",
    model: "Land Rover",
    code: "landrover",
    locationCity: "Москва",
    locaionDistrict: "мытищи",
    pathToImage: "/rangerover.png",
    year: 2014,
    price: 34_999_000,
    engineType: "дизельный",
    enginePower: 339,
    gearBoxType: "автомат",
    bodyType: "внедорожник",
    steeringWheelPosition: "left",
    mileAge: 95000,
    engineVolume: 3,
    novelty: "newcars"
  },
  {
    id: 4,
    brand: "Land Rover",
    model: "SV30",
    code: "sv30",
    locationCity: "Москва",
    locaionDistrict: "юго-западная",
    pathToImage: "https://classicsworld.co.uk/wp-content/uploads/sites/6/dsc_5982.jpg?w=900",
    year: 1980,
    price: 900_000,
    engineType: "бензиновый",
    enginePower: 150,
    gearBoxType: "механика",
    bodyType: "внедорожник",
    steeringWheelPosition: "left",
    mileAge: 250000,
    engineVolume: 3,
    novelty: "newcars"
  },
  {
    id: 5,
    brand: "Lamborghini",
    model: "Aventador SVJ",
    code: "aventadorsvj",
    locationCity: "Москва",
    locaionDistrict: "митино",
    pathToImage: "https://bluesky.cdn.imgeng.in/cogstock-images/2c170cf5-ff61-4b0a-8f27-8e3ac5557859.jpg?migeng=/w_1200/cmpr_99/",
    year: 2020,
    price: 90_000_000,
    engineType: "бензиновый",
    enginePower: 770,
    gearBoxType: "автомат",
    bodyType: "купе",
    steeringWheelPosition: "left",
    mileAge: 6000,
    engineVolume: 3,
    novelty: "newcars"
  },
  {
    id: 6,
    brand: "Range Rover",
    model: "Sport",
    code: "sport",
    locationCity: "Москва",
    locaionDistrict: "шоссе энтузиастов",
    pathToImage: "https://media.production.jlrms.com/styles/hero_crop/s3/2024-08-06/image/312d52cd-c83e-4131-b121-cbec328f65c0/RRS_SV_Edition_Two_25MY_01_Nebula_Blue_070824.jpg?VersionId=yW_ZNHltSghBKkN7ekS5PuErVlS4RGrb&h=dfb1210d&itok=3KFjkdZQ",
    year: 2015,
    price: 18_000_000,
    engineType: "дизельный",
    enginePower: 340,
    gearBoxType: "автомат",
    bodyType: "внедорожник",
    steeringWheelPosition: "left",
    mileAge: 83000,
    engineVolume: 3,
    novelty: "newcars"
  }
]

export const dealersFakeData: Dealer[] = [
  {
    id: 1,
    name: "JETCAR",
    status: "Автосалон",
    phoneNumber: "+7-999-888-99-88",
    adId: 1
  },
  {
    id: 2,
    name: "Сармат",
    status: "Частное лицо",
    phoneNumber: "+7-933-878-22-22",
    adId: 2
  }
]

export const Models = {
  lada: [
      "Priora",
      "Vesta",
      "Kalina"
  ],
  porsche: [
      "Cayene",
      "Panamera"
  ],
  rangerover: [
      "Land Rover",
      "Sport"
  ]
}

export const gearboxOptions = [
  {
      value: 'mechanical',
      label: 'Механика',
  },
  {
      value: 'automatic',
      label: 'Автомат',
  },
  {
      value: 'robot',
      label: 'Роботизированная',
  },
  {
      value: 'variator',
      label: 'Вариатор',
  },
]

export const brandOptions = [
    {
        value: 'lada',
        label: 'Лада',
    },
    {
        value: 'porsche',
        label: 'Porsche',
    },
    {
        value: 'rangerover',
        label: 'Range rover',
    },
]

export const carBodyOptions = [
    {
        value: 'coupe',
        label: 'Купэ',
    },
    {
        value: 'universal',
        label: 'Универсал',
    },
    {
        value: 'cabrio',
        label: 'Кабриолет',
    },
    {
        value: 'sedan',
        label: 'Седан',
    },
    {
        value: 'hatchback',
        label: 'Хэтчбек',
    },
    {
        value: 'suv',
        label: 'Внедорожник',
    },
]