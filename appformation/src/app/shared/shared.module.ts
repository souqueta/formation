import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TotalPipe } from './pipes/total.pipe';
import { NbJoursPipe } from './pipes/nb-jours.pipe';
import { ColorStateDirective } from './directives/color-state.directive';
import { ColorNbJoursDirective } from './directives/color-nb-jours.directive';
import { BtnComponent } from './components/btn/btn.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [TotalPipe, NbJoursPipe, ColorStateDirective, ColorNbJoursDirective, BtnComponent],
  imports: [
    CommonModule,
    RouterModule
  ], exports: [
    TotalPipe,
    NbJoursPipe,
    ColorStateDirective,
    ColorNbJoursDirective,
    BtnComponent
  ]
})
export class SharedModule { }
