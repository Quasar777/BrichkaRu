export type Dealer = {
  id: number;
  name: string;
  status: "Автосалон" | "Частное лицо" | "Юридическое лицо";
  phoneNumber: string;
  adId: number;
}