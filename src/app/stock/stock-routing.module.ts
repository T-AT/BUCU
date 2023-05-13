import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StockListComponent } from './stock-list/stock-list.component';
import { AuthGuardService } from 'src/app/services/auth-guard.service';
import { CreateStockComponent } from './create-stock/create-stock.component';
import { CreateStockDeactivateGuardService } from 'src/app/services/create-stock-deactivate-guard.service';
import { StockDetailsComponent } from './stock-details/stock-details.component';
import { StockLoadResolverService } from "../services/StockLoadResolverService";

const routes: Routes = [
  { path: 'list', component: StockListComponent,
    canActivate: [AuthGuardService] },
  { path: 'create', component: CreateStockComponent,
    canActivate: [AuthGuardService], canDeactivate: [CreateStockDeactivateGuardService] },
  { path: ':code', component: StockDetailsComponent,
    canActivate: [AuthGuardService], resolve: { stock: StockLoadResolverService } },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StockRoutingModule { }
