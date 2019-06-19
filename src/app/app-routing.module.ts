import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {DetailsComponent} from './details/details.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'offers/:offerId', component: DetailsComponent },
  { path: '**', component: HomeComponent },
];

const routing = RouterModule.forRoot(routes);

@NgModule({
  imports: [routing],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
