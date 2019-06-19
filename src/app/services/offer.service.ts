import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Offer } from './Offer';
import { OffersResponse } from './OffersResponse';

@Injectable({
  providedIn: 'root'
})
export class OfferService {

  constructor(
    private http: HttpClient
  ) { }

  getOffers() {
    return this.http.get('/assets/offers.json');
  }

  getRecommendedOffers() {
    return this.getOffers().toPromise().then(
      (offers: OffersResponse) => {
        return offers.recommendedOffers;
      }
    )
  }

  getInvitedOffers() {
    return this.getOffers().toPromise().then(
      (offers: OffersResponse) => {
        return offers.invitedOffers;
      }
    )
  }

  getAcceptedOffers() {
    return this.getOffers().toPromise().then(
      (offers: OffersResponse) => {
        return offers.acceptedOffers;
      }
    )
  }
}
