import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InboxRoutingModule } from './inbox-routing.module';
import { MailComponent } from './mail/mail.component';
import { SharedModule } from '../common/shared/shared.module';


@NgModule({
  declarations: [
    MailComponent
  ],
  imports: [
    CommonModule,
    InboxRoutingModule,
    SharedModule
  ]
})
export class InboxModule { }
