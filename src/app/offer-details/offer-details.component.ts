import { Component, Input, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { ActivatedRoute, Router } from '@angular/router';
import { Offer } from '../services/Offer';
import { OfferService } from '../services/offer.service';
import {PaymentService} from '../services/payment.service';

@Component({
  selector: 'offer-details',
  templateUrl: './offer-details.component.html',
  styleUrls: ['./offer-details.component.scss']
})
export class OfferDetailsComponent implements OnInit {
  offer: Offer;
  isLoading: boolean;
  isOfferFound: boolean;
  isOfferIdPresent: boolean;

  constructor(
    private activatedRoute: ActivatedRoute,
    private offerService: OfferService,
    private matSnackbar: MatSnackBar,
    private router: Router,
    private paymentService: PaymentService
  ) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(params => {
      this.isOfferIdPresent = true;
      this.isLoading = true;
      this.offerService.getOffer(+params.get('id'))
        .then(
          offer => {
            this.isOfferFound = !!offer;
            this.offer = offer;
          }
        ).catch(() => {
          this.isOfferFound = false;
      }).finally(() => {
        this.isLoading = false;
      });
    });
  }
  
  startPayment(offer: Offer) {
    this.paymentService.startPayment(offer)
      .then((response) => {
        console.log(response);
        this.onPaymentSuccess(offer);
      }).catch((error) => {
        this.onPaymentFailure(`An error occurred: ${error}`);
    });
  };

  onPaymentSuccess(offer: Offer) {
    this.offerService.saveAcceptedOffer(offer);
    this.matSnackbar.open("Payment successful", "Close", {
      duration: 2000,
    });
    // Redirect to home page
    setTimeout(() => {
      this.router.navigateByUrl('/');
    }, 3000);
  }
  
  onPaymentFailure(message) {
    this.matSnackbar.open(`Payment failed.\n ${message}`, "Close", {
      duration: 2000,
    });
  }

  share(offer: Offer) {
    OfferService.shareOffer(offer);
  }

  getSmallGroupPrice(offer: Offer) {
    return Math.round(offer.price * 0.1);
  }

  getMediumGroupPrice(offer: Offer) {
    return Math.round(offer.price * 0.2);
  }
}
