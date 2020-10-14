import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TotalPipe } from './pipes/total.pipe';
import { NbJoursPipe } from './pipes/nb-jours.pipe';
import { ColorStateDirective } from './directives/color-state.directive';
import { ColorNbJoursDirective } from './directives/color-nb-jours.directive';



@NgModule({
  declarations: [TotalPipe, NbJoursPipe, ColorStateDirective, ColorNbJoursDirective],
  imports: [
    CommonModule,
  ], exports: [
    TotalPipe,
    NbJoursPipe,
    ColorStateDirective,
    ColorNbJoursDirective
  ]
})
export class SharedModule { }
