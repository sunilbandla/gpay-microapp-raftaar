import { Component, OnInit } from '@angular/core';
import { OfferService } from '../services/offer.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  recommendedOffers;
  invitedOffers;

  constructor(
    private offerService: OfferService
  ) {
  }

  ngOnInit() {
    this.offerService.getRecommendedOffers()
      .then(offers => {
        this.recommendedOffers = offers;
      });
    this.offerService.getInvitedOffers()
      .then(offers => {
        this.invitedOffers = offers;
      });
  }

}
