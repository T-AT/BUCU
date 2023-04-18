import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { StockListComponent } from './stock/stock-list/stock-list.component';
import { CreateStockComponent } from './stock/create-stock/create-stock.component';
import { StockItemComponent } from './stock/stock-item/stock-item.component';
import { FormsModule } from '@angular/forms';
import { StockService } from './services/stock.service';

@NgModule({
  declarations: [
    AppComponent,
    StockListComponent,
    CreateStockComponent,
    StockItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    StockService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
