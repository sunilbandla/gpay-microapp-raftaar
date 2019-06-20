export interface Offer {
  id: number;
  title: string;
  iconUrl: string;
  description: string;
  merchantName: string;
  price: number;
  duration: number;
  creationTime: number;
  isAccepted: boolean;
}
