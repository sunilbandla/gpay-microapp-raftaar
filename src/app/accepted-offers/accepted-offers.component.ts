import { Component, OnInit } from '@angular/core';
import { OfferService } from '../services/offer.service';

@Component({
  selector: 'accepted-offers',
  templateUrl: './accepted-offers.component.html',
  styleUrls: ['./accepted-offers.component.scss']
})
export class AcceptedOffersComponent implements OnInit {

  acceptedOffers;

  constructor(
    private offerService: OfferService
  ) {
  }

  ngOnInit() {
    this.offerService.getAcceptedOffers()
      .then(offers => {
        this.acceptedOffers = offers;
      });
  }

}
