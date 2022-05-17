import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LayoutComponent } from './components/layout/layout.component';
import { OrderComponent } from './components/order/order.component';

const routes: Routes = [
  {path: '', component:LayoutComponent, children: [
    {path: '', component:HomeComponent},
    {path: 'order', component:OrderComponent},
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
