import { Component, OnInit } from '@angular/core';
import { StockService } from 'src/app/services/stock.service';
import { Stock } from 'src/app/model/stock';

@Component({
  selector: 'app-stock-list',
  templateUrl: './stock-list.component.html',
  styleUrls: ['./stock-list.component.css']
})
export class StockListComponent implements OnInit {

  public stocks: Stock[] | undefined;
  constructor(private stockService: StockService) { }

  ngOnInit() {
    this.stocks = this.stockService.getStocks();
  }

  onToggleFavorite(stock: Stock) {
    console.log('Favorite for stock ', stock, ' was triggered');
    this.stockService.toggleFavorite(stock);
  }
}
