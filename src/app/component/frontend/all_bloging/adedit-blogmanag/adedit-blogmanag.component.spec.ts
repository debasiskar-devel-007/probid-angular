import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdeditBlogmanagComponent } from './adedit-blogmanag.component';

describe('AdeditBlogmanagComponent', () => {
  let component: AdeditBlogmanagComponent;
  let fixture: ComponentFixture<AdeditBlogmanagComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdeditBlogmanagComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdeditBlogmanagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
