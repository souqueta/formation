import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules, Router } from '@angular/router';
import { ControlService } from './core/services/control.service';
import { ClientsModule } from './views/clients/clients.module';
import { PageHomeComponent } from './views/home/pages/page-home/page-home.component';
import { OrdersModule } from './views/orders/orders.module';
import { PageNotFoundComponent } from './views/page-not-found/pages/page-not-found/page-not-found.component';
import { PageLoginComponent } from './views/users/pages/page-login/page-login.component';
import { UsersModule } from './views/users/users.module';

const routes: Routes = [
  { path: 'home', component: PageHomeComponent},
  //{ path: 'orders', component: PageListOrdersComponent},
  { path: 'orders', canActivate: [ControlService], loadChildren: () => import('./views/orders/orders.module').then(m => OrdersModule)},
  //{ path: 'clients', component: PageListClientsComponent},
  { path: 'clients', canActivate: [ControlService], loadChildren: () => import('./views/clients/clients.module').then(m => ClientsModule)},
  { path: 'users', loadChildren: () => import('./views/users/users.module').then(m => UsersModule)},
  { path: 'login', component: PageLoginComponent }, //  loadChildren: () => import('./views/users/users.module').then(m => LoginModule)
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,
    {
      enableTracing: false,
      preloadingStrategy: PreloadAllModules
    })],
  exports: [RouterModule]
})
export class AppRoutingModule {
  constructor (router: Router) {
    const replacer = (key, value) => (typeof value === 'function') ? value.name : value;
    console.log('Routes: ', JSON.stringify(router.config, replacer, 1));
  }
}
