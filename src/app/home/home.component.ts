import { Component, OnInit } from '@angular/core';
import { OfferService } from '../services/offer.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {
  }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(params => {
      const id = params.get('id');
      if (id) {
        this.router.navigate(['/offers', { id }]);
        return;
      }
      const list = params.get('list');
      if (list) {
        this.router.navigate([`/${list}`]);
        return;
      }
    });
  }

  resetState() {
    OfferService.resetState();
  }
}
