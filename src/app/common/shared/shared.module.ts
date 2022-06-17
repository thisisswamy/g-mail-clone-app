import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { ToolBarComponent } from '../components/tool-bar/tool-bar.component';
import { MailDetailsTemplateComponent } from '../components/mail-details-template/mail-details-template.component';
import { MailTemplateComponent } from '../components/mail-template/mail-template.component';
import { LabelsBarComponent } from '../components/labels-bar/labels-bar.component';
import { ComposeMailComponent } from '../components/compose-mail/compose-mail.component';


@NgModule({
  declarations: [
    ToolBarComponent,
    MailTemplateComponent,
    MailDetailsTemplateComponent,
    LabelsBarComponent,
    ComposeMailComponent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule
  ],
  exports:[
    ToolBarComponent,
    MailTemplateComponent,
    MailDetailsTemplateComponent,
    LabelsBarComponent,
    ComposeMailComponent
  ]
})
export class SharedModule { }
