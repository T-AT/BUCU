import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Stock } from '../../model/stock';
import { StockService } from 'src/app/services/stock.service';

@Component({
  selector: 'app-stock-item',
  templateUrl: './stock-item.component.html',
  styleUrls: ['./stock-item.component.css']
})
export class StockItemComponent {

  @Input() public stock!: Stock;

  constructor(private stockService: StockService) {}

  onToggleFavorite(_event: any) {
    this.stockService.toggleFavorite(this.stock)
      .subscribe((_stock: any) => this.stock.favorite = !this.stock.favorite);
  }
}
