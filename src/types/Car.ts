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
};


export type Dealer = {
  id: number,
  name: string,
  status: "Автосалон" | "Частное лицо" | "Юридическое лицо",
  phoneNumber: string,
  adId: number
}