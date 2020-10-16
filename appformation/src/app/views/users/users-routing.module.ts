import { NgModule } from '@angular/core';
import { PageListUsersComponent } from './pages/page-list-users/page-list-users.component';
import { Routes, RouterModule } from '@angular/router';
import { PageLoginComponent } from './pages/page-login/page-login.component';
import { PageAddUserComponent } from './pages/page-add-user/page-add-user.component';

const routes: Routes = [
  { path: '', component: PageListUsersComponent},
  { path: '/login', component: PageLoginComponent},
  { path: 'add', component: PageAddUserComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
