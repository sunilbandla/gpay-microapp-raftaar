import { Component, Input, OnInit } from '@angular/core';
import { Offer } from '../services/Offer';
import { OfferService } from '../services/offer.service';

@Component({
  selector: 'offer',
  templateUrl: './offer.component.html',
  styleUrls: ['./offer.component.scss']
})
export class OfferComponent implements OnInit {

  @Input()
  offer: Offer;

  constructor(private offerService: OfferService) { }

  ngOnInit() {
  }

  share(offer: Offer) {
    OfferService.shareOffer(offer);
  }
}
