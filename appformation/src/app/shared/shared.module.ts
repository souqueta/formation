import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TotalPipe } from './pipes/total.pipe';
import { NbJoursPipe } from './pipes/nb-jours.pipe';



@NgModule({
  declarations: [TotalPipe, NbJoursPipe],
  imports: [
    CommonModule,
  ], exports: [
    TotalPipe,
    NbJoursPipe
  ]
})
export class SharedModule { }
