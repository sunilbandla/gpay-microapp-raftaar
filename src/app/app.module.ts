import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatButtonToggleModule, MatCardModule, MatDividerModule, MatExpansionModule, MatIconModule, MatProgressSpinnerModule, MatSnackBarModule } from '@angular/material';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { OfferDetailsComponent } from './offer-details/offer-details.component';
import { HttpClientModule } from '@angular/common/http';
import { OfferService } from './services/offer.service';
import { OfferComponent } from './offer/offer.component';
import { OfferHeaderComponent } from './offer-header/offer-header.component';
import { AcceptedOffersComponent } from './accepted-offers/accepted-offers.component';
import { OfferListComponent } from './offer-list/offer-list.component';
import { InvitedOffersComponent } from './invited-offers/invited-offers.component';
import { RecommendedOffersComponent } from './recommended-offers/recommended-offers.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    OfferDetailsComponent,
    OfferComponent,
    OfferHeaderComponent,
    AcceptedOffersComponent,
    OfferListComponent,
    InvitedOffersComponent,
    RecommendedOffersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatExpansionModule,
    MatProgressSpinnerModule,
    MatSnackBarModule,
    MatIconModule,
    MatButtonToggleModule,
    MatDividerModule,
    HttpClientModule,
  ],
  providers: [
    OfferService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
