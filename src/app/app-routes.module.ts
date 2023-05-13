import { NgModule } from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';

import { CreateStockComponent } from './stock/create-stock/create-stock.component';
import { StockListComponent } from './stock/stock-list/stock-list.component';
import { LoginComponent } from './user/login/login.component';
import { RegisterComponent } from './user/register/register.component';
import { StockDetailsComponent } from './stock/stock-details/stock-details.component';
import { AuthGuardService } from './services/auth-guard.service';
import { CreateStockDeactivateGuardService } from './services/create-stock-deactivate-guard.service';
import { StockLoadResolverService } from "./services/StockLoadResolverService";

const appRoutes: Routes = [
  { path: '', redirectTo: 'user/login', pathMatch: 'full' },
  { path: 'stock', loadChildren: () => import('src/app/stock/stock.module').then(m => m.StockModule)},
  { path: 'user', loadChildren: () => import('src/app/user/user.module').then(m => m.UserModule) },
  { path: '**', redirectTo: 'user/register' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes),
  ],
  exports: [
    RouterModule
  ],
})
export class AppRoutesModule { }
