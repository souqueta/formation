import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconNavComponent } from './icon-nav/icon-nav.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { IconMartiniComponent } from './icon-martini/icon-martini.component';
import { IconDeconnectionComponent } from './icon-deconnection/icon-deconnection.component';
import { IconFilterComponent } from './icon-filter/icon-filter.component';



@NgModule({
  declarations: [IconNavComponent, IconMartiniComponent, IconDeconnectionComponent, IconFilterComponent],
  imports: [
    CommonModule,
    FontAwesomeModule
  ],
  exports: [
    IconNavComponent,
    IconMartiniComponent,
    IconDeconnectionComponent,
    IconFilterComponent
  ]
})
export class IconsModule { }
