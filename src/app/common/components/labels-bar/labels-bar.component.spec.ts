import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LabelsBarComponent } from './labels-bar.component';

describe('LabelsBarComponent', () => {
  let component: LabelsBarComponent;
  let fixture: ComponentFixture<LabelsBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LabelsBarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LabelsBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
