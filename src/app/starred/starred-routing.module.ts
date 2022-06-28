import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StarredMailDetailComponent } from './starred-mail-detail/starred-mail-detail.component';
import { StarredMailComponent } from './starred-mail/starred-mail.component';

const routes: Routes = [
  {path:'',component:StarredMailComponent},
  {path:'mail-details',component:StarredMailDetailComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StarredRoutingModule { }
