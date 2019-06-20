import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InvitedOffersComponent } from './invited-offers.component';

describe('InvitedOffersComponent', () => {
  let component: InvitedOffersComponent;
  let fixture: ComponentFixture<InvitedOffersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InvitedOffersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvitedOffersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
