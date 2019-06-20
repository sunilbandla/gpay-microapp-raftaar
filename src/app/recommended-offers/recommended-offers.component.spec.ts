import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecommendedOffersComponent } from './recommended-offers.component';

describe('RecommendedOffersComponent', () => {
  let component: RecommendedOffersComponent;
  let fixture: ComponentFixture<RecommendedOffersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecommendedOffersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecommendedOffersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
