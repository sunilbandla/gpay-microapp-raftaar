import { Injectable } from '@angular/core';
import {Offer} from './Offer';

declare const microapps: any;

// https://developers.google.com/pay/api/web/reference/object#PaymentDataRequest
const paymentRequest = {
  apiVersion: 2,
  apiVersionMinor: 0,
  allowedPaymentMethods: [{
    type: 'UPI',
    parameters: {
      payeeVpa: 'dim-sum-dko@icici',
      payeeName: 'Dko Dim Sum',
      mcc: '0000',
      transactionReferenceId: 1,
      transactionId: 'AXI1',
    },
    tokenizationSpecification: {
      type: 'DIRECT',
      parameters: {},
    }
  }],
  merchantInfo: {
    merchantId: 'Raftaar'
  },
  transactionInfo: {
    countryCode: "IN",
    totalPriceStatus: 'FINAL',
    totalPrice: 0,
    currencyCode: 'INR'
  }
};

@Injectable({
  providedIn: 'root'
})
export class PaymentService {
  transactionReferenceId: number = 1;
  transactionId: number = 1;

  constructor() { }

  startPayment(offer: Offer) {
    paymentRequest.allowedPaymentMethods[0].parameters.transactionId =
      `AXI${this.transactionId++}`;
    paymentRequest.allowedPaymentMethods[0].parameters.transactionReferenceId =
      this.transactionReferenceId++;
    paymentRequest.transactionInfo.totalPrice = offer.price || 100;
    // return Promise.resolve();
    // TODO
    return microapps.requestPayment(paymentRequest);
  };

}
