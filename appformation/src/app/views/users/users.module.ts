import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TemplatesModule } from 'src/app/templates/templates.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { PageListUsersComponent } from './pages/page-list-users/page-list-users.component';
import { UsersRoutingModule } from './users-routing.module';


@NgModule({
  declarations: [PageListUsersComponent], //
  imports: [
    CommonModule,
    UsersRoutingModule,
    TemplatesModule,
    SharedModule
  ]
})
export class UsersModule { }
