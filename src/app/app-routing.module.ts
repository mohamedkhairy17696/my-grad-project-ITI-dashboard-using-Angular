import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './components/users/users.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { GigsComponent } from './components/gigs/gigs.component';
import { OrdersComponent } from './components/orders/orders.component';
import { CategoriesComponent } from './components/categories/categories.component';

const routes: Routes = [
  { path: '', redirectTo: 'Users', pathMatch: 'full' },
  { path: 'Categories', component: CategoriesComponent, title: 'cats' },
  { path: 'Orders', component: OrdersComponent, title: 'orders' },
  { path: 'Users', component: UsersComponent, title: 'users' },
  { path: 'Gigs', component: GigsComponent, title: 'gigs' },
  { path: '**', component: NotfoundComponent }, //Not Found Path //Wild Card Path
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
