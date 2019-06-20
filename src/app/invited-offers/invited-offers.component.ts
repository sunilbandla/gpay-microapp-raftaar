import { Component, OnInit } from '@angular/core';
import { OfferService } from '../services/offer.service';

@Component({
  selector: 'invited-offers',
  templateUrl: './invited-offers.component.html',
  styleUrls: ['./invited-offers.component.scss']
})
export class InvitedOffersComponent implements OnInit {

  invitedOffers;

  constructor(
    private offerService: OfferService
  ) {
  }

  ngOnInit() {
    this.offerService.getInvitedOffers()
      .then(offers => {
        this.invitedOffers = offers;
      });
  }

}
