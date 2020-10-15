import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientsRoutingModule } from './clients-routing.module';
import { PageListClientsComponent } from './pages/page-list-clients/page-list-clients.component';
import { TemplatesModule } from 'src/app/templates/templates.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { IconsModule } from 'src/app/icons/icons.module';
import { TitleBComponent } from 'src/app/templates/title-b/title-b.component';
import { FormAddClientComponent } from './components/form-add-client/form-add-client.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PageAddClientComponent } from './pages/page-add-client/page-add-client.component';


@NgModule({
  declarations: [PageListClientsComponent, FormAddClientComponent, PageAddClientComponent],
  imports: [
    CommonModule,
    ClientsRoutingModule,
    TemplatesModule,
    SharedModule,
    IconsModule,
    ReactiveFormsModule
  ]
})
export class ClientsModule { }
