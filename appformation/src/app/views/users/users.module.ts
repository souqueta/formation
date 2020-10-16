import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TemplatesModule } from 'src/app/templates/templates.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { PageListUsersComponent } from './pages/page-list-users/page-list-users.component';
import { UsersRoutingModule } from './users-routing.module';
import { FormLoginComponent } from './components/form-login/form-login.component';
import { PageLoginComponent } from './pages/page-login/page-login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PageAddUserComponent } from './pages/page-add-user/page-add-user.component';
import { FormAddUserComponent } from './components/form-add-user/form-add-user.component';


@NgModule({
  declarations: [PageListUsersComponent, FormLoginComponent, PageLoginComponent, PageAddUserComponent, FormAddUserComponent],
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
