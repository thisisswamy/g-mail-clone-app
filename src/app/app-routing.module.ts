import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'',redirectTo:'inbox',pathMatch:'full'
  },
  {
    path:'inbox',
    loadChildren:()=>import('./inbox/inbox.module').then(m=>m.InboxModule)
  }
];

@NgModule({
 
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
