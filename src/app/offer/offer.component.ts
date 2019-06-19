import { Component, Input, OnInit } from '@angular/core';
import { Offer } from '../services/Offer';

@Component({
  selector: 'offer',
  templateUrl: './offer.component.html',
  styleUrls: ['./offer.component.scss']
})
export class OfferComponent implements OnInit {

  @Input()
  offer: Offer;

  constructor() { }

  ngOnInit() {
  }

}
