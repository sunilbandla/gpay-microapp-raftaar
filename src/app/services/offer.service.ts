import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Offer } from './Offer';
import { OffersResponse } from './OffersResponse';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OfferService {

  readonly RECOMMENDED_OFFERS_KEY = 'raftaar.recommendedOffers';
  readonly ACCEPTED_OFFERS_KEY = 'raftaar.acceptedOffers';
  readonly INVITED_OFFERS_KEY = 'raftaar.invitedOffers';

  constructor(
    private http: HttpClient,
  ) { }

  saveAcceptedOffer(offer: Offer) {
    const savedAcceptedOffers = this.getSavedAcceptedOffers() || [];
    savedAcceptedOffers.push(offer);
    this.saveAcceptedOffers(savedAcceptedOffers);
    this.removeOfferFromSavedRecommendedOffers(offer);
    this.removeOfferFromSavedInvitedOffers(offer);
  }

  removeOfferFromSavedRecommendedOffers(offer: Offer) {
    // Remove offer from recommended offers.
    const savedOffers = this.getSavedRecommendedOffers();
    if (!savedOffers) {
      return;
    }
    const offers = this.removeOfferFromOffers(offer, savedOffers);
    this.saveRecommendedOffers(offers);
  }

  removeOfferFromSavedInvitedOffers(offer: Offer) {
    // Remove offer from invited offers.
    const savedOffers = this.getSavedInvitedOffers();
    if (!savedOffers) {
      return;
    }
    const offers = this.removeOfferFromOffers(offer, savedOffers);
    this.saveInvitedOffers(offers);
  }

  removeOfferFromOffers(offer: Offer, offers: Offer[]) {
    const savedOfferIndex = offers
      .findIndex(savedOffer => savedOffer.id === offer.id);
    if (savedOfferIndex === -1) {
      return offers;
    }
    offers.splice(savedOfferIndex, 1);
    return offers;
  }

  getOffers() {
    return this.http.get(environment.baseUrl + '/assets/offers.json');
  }

  getOffer(id: number) {
    return this.getOffers().toPromise().then(
      (offers: OffersResponse) => {
        return [
          ...offers.recommendedOffers,
          ...offers.invitedOffers,
          ...offers.acceptedOffers,
        ].find(offer => offer.id === id);
      }
    )
  }

  getRecommendedOffers() {
    if (!this.getSavedRecommendedOffers()) {
      return this.getOffers().toPromise().then(
        (offers: OffersResponse) => {
          this.saveRecommendedOffers(offers.recommendedOffers);
          return offers.recommendedOffers;
        }
      )
    }
    else {
      return Promise.resolve(this.getSavedRecommendedOffers());
    }
  }

  getInvitedOffers() {
    if (!this.getSavedInvitedOffers()) {
      return this.getOffers().toPromise().then(
        (offers: OffersResponse) => {
          const invitedOffers = this.removeAcceptedOffersFromInvitedOffers(offers.invitedOffers,
                                                                           this.getSavedAcceptedOffers() || []);
          this.saveInvitedOffers(invitedOffers);
          return invitedOffers;
        }
      )
    }
    else {
      return Promise.resolve(this.getSavedInvitedOffers());
    }
  }

  getAcceptedOffers() {
    if (!this.getSavedAcceptedOffers()) {
      return this.getOffers().toPromise().then(
        (offers: OffersResponse) => {
          this.saveAcceptedOffers(offers.acceptedOffers);
          return offers.acceptedOffers;
        }
      )
    }
    else {
      return Promise.resolve(this.getSavedAcceptedOffers());
    }
  }
  
  private removeAcceptedOffersFromInvitedOffers(invitedOffers, acceptedOffers) {
    const acceptedOfferIdToOffer = acceptedOffers.reduce((acc, offer) => {
      acc[offer.id] = offer;
      return acc;
    }, {});
    return invitedOffers.filter(offer => !acceptedOfferIdToOffer[offer.id]);
  }

  private getSavedAcceptedOffers() {
    return OfferService.getSavedValue(this.ACCEPTED_OFFERS_KEY);
  }

  private getSavedInvitedOffers() {
    return OfferService.getSavedValue(this.INVITED_OFFERS_KEY);
  }

  private getSavedRecommendedOffers() {
    return OfferService.getSavedValue(this.RECOMMENDED_OFFERS_KEY);
  }

  private saveAcceptedOffers(offers: Offer[]) {
    sessionStorage.setItem(this.ACCEPTED_OFFERS_KEY, JSON.stringify(offers));
  }

  private saveInvitedOffers(offers: Offer[]) {
    sessionStorage.setItem(this.INVITED_OFFERS_KEY, JSON.stringify(offers));
  }

  private saveRecommendedOffers(offers: Offer[]) {
    sessionStorage.setItem(this.RECOMMENDED_OFFERS_KEY, JSON.stringify(offers));
  }

  private static getSavedValue(key: string) {
    const offers = sessionStorage.getItem(key);
    if (!offers) {
      return;
    }
    return JSON.parse(offers);
  }
}
