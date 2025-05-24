export type Car = {
  id: number;
  brand: string;
  model: string;
  locationCity: string;
  locaionDistrict: string;
  pathToImage: string;
  year: number;
  price: number;
  engineType: string;
  enginePower: number;
  gearBoxType: string;
  bodyType: string;
  steeringWheelPosition: string;
  mileAge: number;
  engineVolume: number;
};


export type Dealer = {
  id: number;
  name: string;
  status: "Автосалон" | "Частное лицо" | "Юридическое лицо";
  phoneNumber: string;
  adId: number;
}

export type DataToSearchProps = {
  selectedBrand: string;
  selectedModel: string;
  selectedGearBox: "mechanical" | "automatic" | "robot" | "variator";
  selectedEngine: "petrol" | "electric" | "diesel" | "hybrid";
  priceFrom: number;
  priceTo: number;
  yearFrom: number;
  yearTo: number;
}