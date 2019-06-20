import { Component, Input, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { ActivatedRoute, Router } from '@angular/router';
import { Offer } from '../services/Offer';
import { OfferService } from '../services/offer.service';

// https://developers.google.com/pay/api/web/reference/object#PaymentDataRequest
const paymentRequest = {
  apiVersion: 2,
  apiVersionMinor: 0,
  allowedPaymentMethods: [{
    type: 'UPI',
    parameters: {
      'payeeVpa': 'dim-sum-dko@icici',
      'payeeName': 'Dko Dim Sum',
      'mcc': '0000',
      'transactionReferenceId': 1,
      'transactionId': 1,
    },
    tokenizationSpecification: {type: 'DIRECT', parameters: {}}
  }],
  merchantInfo: {merchantId: 'Example Merchant'},
  transactionInfo: {
      totalPriceStatus: 'FINAL',
      totalPrice: 0,
      currencyCode: 'INR'
  }
};

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
    paymentRequest.transactionInfo.totalPrice = totalPrice
    microapps.requestPayment(paymentRequest).then((response) => {
      onPaymentSuccess(offer);
    }).catch((error) => {
      onPaymentFailure(`An error occurred: ${error}`);
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
}
