import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SentRoutingModule } from './sent-routing.module';
import { SentMailComponent } from './sent-mail/sent-mail.component';
import { SentMailDetailComponent } from './sent-mail-detail/sent-mail-detail.component';
import { SharedModule } from '../common/shared/shared.module';


@NgModule({
  declarations: [
    SentMailComponent,
    SentMailDetailComponent
  ],
  imports: [
    CommonModule,
    SentRoutingModule,
    SharedModule
  ]
})
export class SentModule { }
