import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SentMailDetailComponent } from './sent-mail-detail/sent-mail-detail.component';
import { SentMailComponent } from './sent-mail/sent-mail.component';

const routes: Routes = [
  {path:'',component:SentMailComponent},
  {path:'mail-details',component:SentMailDetailComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SentRoutingModule { }
