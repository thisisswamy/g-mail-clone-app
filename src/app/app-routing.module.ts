import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './Authentication/auth.guard';

const routes: Routes = [
  {
    path:"",redirectTo:'user',pathMatch:'full'
  },
  {
    path:'user',
    loadChildren:()=>import('./user/user.module').then(m=>m.UserModule)
  },
  {
    path:'inbox',
    canActivate:[AuthGuard],
    loadChildren:()=>import('./inbox/inbox.module').then(m=>m.InboxModule)
  },
  {
    path:'**', redirectTo:'user',pathMatch:'full'
  }
  
];

@NgModule({
 
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
