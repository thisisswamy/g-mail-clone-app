import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StarredMailDetailComponent } from './starred-mail-detail.component';

describe('StarredMailDetailComponent', () => {
  let component: StarredMailDetailComponent;
  let fixture: ComponentFixture<StarredMailDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StarredMailDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StarredMailDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
