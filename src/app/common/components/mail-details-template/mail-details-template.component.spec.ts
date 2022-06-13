import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MailDetailsTemplateComponent } from './mail-details-template.component';

describe('MailDetailsTemplateComponent', () => {
  let component: MailDetailsTemplateComponent;
  let fixture: ComponentFixture<MailDetailsTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MailDetailsTemplateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MailDetailsTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
