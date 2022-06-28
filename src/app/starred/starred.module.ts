import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StarredRoutingModule } from './starred-routing.module';
import { StarredMailComponent } from './starred-mail/starred-mail.component';
import { StarredMailDetailComponent } from './starred-mail-detail/starred-mail-detail.component';
import { SharedModule } from '../common/shared/shared.module';


@NgModule({
  declarations: [
    StarredMailComponent,
    StarredMailDetailComponent
  ],
  imports: [
    CommonModule,
    StarredRoutingModule,
    SharedModule
  ]
})
export class StarredModule { }
