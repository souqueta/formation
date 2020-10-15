import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientsRoutingModule } from './clients-routing.module';
import { PageListClientsComponent } from './pages/page-list-clients/page-list-clients.component';
import { TemplatesModule } from 'src/app/templates/templates.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { IconsModule } from 'src/app/icons/icons.module';
import { TitleBComponent } from 'src/app/templates/title-b/title-b.component';


@NgModule({
  declarations: [PageListClientsComponent],
  imports: [
    CommonModule,
    ClientsRoutingModule,
    TemplatesModule,
    SharedModule,
    IconsModule
  ]
})
export class ClientsModule { }
