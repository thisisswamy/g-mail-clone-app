import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SentMailDetailComponent } from './sent-mail-detail.component';

describe('SentMailDetailComponent', () => {
  let component: SentMailDetailComponent;
  let fixture: ComponentFixture<SentMailDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SentMailDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SentMailDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
