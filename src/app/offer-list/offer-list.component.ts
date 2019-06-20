import { Component, Input, OnInit } from '@angular/core';
import { Offer } from '../services/Offer';

@Component({
  selector: 'offer-list',
  templateUrl: './offer-list.component.html',
  styleUrls: ['./offer-list.component.scss']
})
export class OfferListComponent implements OnInit {

  @Input()
  offers: Offer[];

  @Input()
  title: string;

  @Input()
  iconUrl?: string;

  constructor() { }

  ngOnInit() {
  }

}
