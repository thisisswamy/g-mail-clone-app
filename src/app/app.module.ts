import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './common/components/header/header.component';
import { MenuComponent } from './common/components/menu/menu.component';
import { ComposeMailComponent } from './common/components/compose-mail/compose-mail.component';
import { AuthGuard } from './Authentication/auth.guard';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
