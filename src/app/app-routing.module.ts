import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {OfferDetailsComponent} from './offer-details/offer-details.component';
import { AcceptedOffersComponent } from './accepted-offers/accepted-offers.component';
import { RecommendedOffersComponent } from './recommended-offers/recommended-offers.component';
import { InvitedOffersComponent } from './invited-offers/invited-offers.component';

const routes: Routes = [
  { path: '/:id/:list', component: HomeComponent },
  { path: 'offers/:id', component: OfferDetailsComponent },
  { path: 'accepted-offers', component: AcceptedOffersComponent },
  { path: 'recommended-offers', component: RecommendedOffersComponent },
  { path: 'invited-offers', component: InvitedOffersComponent },
  { path: '**', component: HomeComponent },
];

const routing = RouterModule.forRoot(routes);

@NgModule({
  imports: [routing],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
