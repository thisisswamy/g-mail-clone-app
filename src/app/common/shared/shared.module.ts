import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { ToolBarComponent } from '../components/tool-bar/tool-bar.component';


@NgModule({
  declarations: [ToolBarComponent],
  imports: [
    CommonModule,
    SharedRoutingModule
  ],
  exports:[ToolBarComponent]
})
export class SharedModule { }
