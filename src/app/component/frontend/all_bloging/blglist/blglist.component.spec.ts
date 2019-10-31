import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlglistComponent } from './blglist.component';

describe('BlglistComponent', () => {
  let component: BlglistComponent;
  let fixture: ComponentFixture<BlglistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlglistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlglistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
