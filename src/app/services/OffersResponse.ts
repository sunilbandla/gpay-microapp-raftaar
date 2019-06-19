import { Offer } from './Offer';

export interface OffersResponse {
  recommendedOffers: Offer[];
  invitedOffers: Offer[];
  acceptedOffers: Offer[];
}
