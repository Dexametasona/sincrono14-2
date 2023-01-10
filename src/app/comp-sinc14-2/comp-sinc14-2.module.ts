import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PadreComponent } from './padre/padre.component';
import { HijoComponent } from './hijo/hijo.component';



@NgModule({
  declarations: [
    PadreComponent,
    HijoComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:
  [PadreComponent,
  HijoComponent,
FormsModule]
})
export class CompSinc142Module { }
