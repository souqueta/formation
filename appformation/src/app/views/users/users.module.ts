import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TemplatesModule } from 'src/app/templates/templates.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { PageListUsersComponent } from './pages/page-list-users/page-list-users.component';
import { UsersRoutingModule } from './users-routing.module';
import { FormLoginComponent } from './components/form-login/form-login.component';
import { PageLoginComponent } from './pages/page-login/page-login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [PageListUsersComponent, FormLoginComponent, PageLoginComponent], //
  imports: [
    CommonModule,
    UsersRoutingModule,
    TemplatesModule,
    SharedModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class UsersModule { }
