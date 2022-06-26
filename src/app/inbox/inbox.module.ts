import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InboxRoutingModule } from './inbox-routing.module';
import { MailComponent } from './mail/mail.component';
import { SharedModule } from '../common/shared/shared.module';
import { MailDetailsComponent } from './mail-details/mail-details.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    MailComponent,
    MailDetailsComponent
  ],
  imports: [
    CommonModule,
    InboxRoutingModule,
    SharedModule,
    HttpClientModule
  ]
})
export class InboxModule { }
