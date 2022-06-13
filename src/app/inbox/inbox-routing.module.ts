import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MailDetailsComponent } from './mail-details/mail-details.component';
import { MailComponent } from './mail/mail.component';

const routes: Routes = [
  {path:'',component:MailComponent},
  {path:'mail-details',component:MailDetailsComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InboxRoutingModule { }
