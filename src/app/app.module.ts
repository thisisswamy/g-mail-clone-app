import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './common/components/header/header.component';
import { MenuComponent } from './common/components/menu/menu.component';
import { MailTemplateComponent } from './common/components/mail-template/mail-template.component';
import { MailDetailsTemplateComponent } from './common/components/mail-details-template/mail-details-template.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
