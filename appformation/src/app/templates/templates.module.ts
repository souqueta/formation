import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableLightComponent } from './table-light/table-light.component';
import { SharedModule } from '../shared/shared.module';
import { TableDarkComponent } from './table-dark/table-dark.component';



@NgModule({
  declarations: [TableLightComponent, TableDarkComponent],
  imports: [
    CommonModule,
    SharedModule
  ], exports: [
    TableLightComponent,
    TableDarkComponent
  ]
})
export class TemplatesModule { }
