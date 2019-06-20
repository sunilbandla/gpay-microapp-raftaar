import { Component, Input, OnInit } from '@angular/core';
import { Offer } from '../services/Offer';
import { OfferService } from '../services/offer.service';

@Component({
  selector: 'offer-header',
  templateUrl: './offer-header.component.html',
  styleUrls: ['./offer-header.component.scss']
})
export class OfferHeaderComponent implements OnInit {

  @Input()
  offer: Offer;

  constructor() { }

  ngOnInit() {
  }

  getOfferExpirationTime(offer: Offer) {
    return OfferService.getOfferExpirationTime(offer);
  }

}
