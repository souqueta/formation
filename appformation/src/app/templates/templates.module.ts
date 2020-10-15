import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableLightComponent } from './table-light/table-light.component';
import { SharedModule } from '../shared/shared.module';
import { TableDarkComponent } from './table-dark/table-dark.component';
import { TitleAComponent } from './title-a/title-a.component';
import { TitleBComponent } from './title-b/title-b.component';



@NgModule({
  declarations: [TableLightComponent, TableDarkComponent, TitleAComponent, TitleBComponent],
  imports: [
    CommonModule,
    SharedModule
  ], exports: [
    TableLightComponent,
    TableDarkComponent,
    TitleAComponent,
    TitleBComponent
  ]
})
export class TemplatesModule { }
