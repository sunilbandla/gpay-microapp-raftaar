import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {OfferDetailsComponent} from './offer-details/offer-details.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'offers/:offerId', component: OfferDetailsComponent },
  { path: '**', component: HomeComponent },
];

const routing = RouterModule.forRoot(routes);

@NgModule({
  imports: [routing],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
