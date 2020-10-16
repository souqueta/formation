import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageAddOrderComponent } from './pages/page-add-order/page-add-order.component';
import { PageListOrdersComponent } from './pages/page-list-orders/page-list-orders.component';
import { PageTestComponent } from './pages/page-test/page-test.component';

const routes: Routes = [
  { path: '', component: PageListOrdersComponent, data: {title:'Orders', subtitle:'List of orderss'}},
  { path: 'add', component: PageAddOrderComponent, data: {title:'Orders', subtitle:'Add orderss'}},
  { path: 'test/:id', component: PageTestComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrdersRoutingModule { }
