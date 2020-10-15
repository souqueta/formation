import { NgModule } from '@angular/core';
import { PageListUsersComponent } from './pages/page-list-users/page-list-users.component';
import { Routes, RouterModule } from '@angular/router';
import { PageLoginComponent } from './pages/page-login/page-login.component';

const routes: Routes = [
  { path: '', component: PageListUsersComponent},
  { path: '/login', component: PageLoginComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
