import { Component, OnInit } from '@angular/core';
import { OfferService } from '../services/offer.service';

@Component({
  selector: 'recommended-offers',
  templateUrl: './recommended-offers.component.html',
  styleUrls: ['./recommended-offers.component.scss']
})
export class RecommendedOffersComponent implements OnInit {

  recommendedOffers;

  constructor(
    private offerService: OfferService
  ) {
  }

  ngOnInit() {
    this.offerService.getRecommendedOffers()
      .then(offers => {
        this.recommendedOffers = offers;
      });
  }

}
