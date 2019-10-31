import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListingblogManagmentComponent } from './listingblog-managment.component';

describe('ListingblogManagmentComponent', () => {
  let component: ListingblogManagmentComponent;
  let fixture: ComponentFixture<ListingblogManagmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListingblogManagmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListingblogManagmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
