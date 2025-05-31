import { Car } from "./Car";
import { User } from "./User";

export type Ad = {
  id: number;
  dealerId: number;
  carId: number;
  description: string;
  publishDate: Date;
  adStatus: string;
  numberOfViews: number;
  marketPriceStatus: string;
  addedToFavourites: number;
  user: User;
  car: Car;
};


