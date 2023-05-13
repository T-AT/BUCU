import { Component, OnInit } from '@angular/core';
import { Stock } from 'src/app/model/stock';
import { StockService } from 'src/app/services/stock.service';

@Component({
  selector: 'app-create-stock',
  templateUrl: './create-stock.component.html',
  styleUrls: ['./create-stock.component.css']
})
export class CreateStockComponent {

  public stock!: Stock;
  public confirmed = false;
  public message = null;
  public exchanges = ['NYSE', 'NASDAQ', 'OTHER'];
  constructor(private stockService: StockService) {
    this.initializeStock();
  }

  initializeStock() {
    this.stock =  {
      name: '',
      code: '',
      price: 0,
      previousPrice: 0,
      exchange: 'NASDAQ',
      favorite: false
    };
  }

  setStockPrice(price: number) {
    this.stock.price = price;
    this.stock.previousPrice = price;
  }

  createStock(stockForm: { valid: any; }) {
    if (stockForm.valid) {
      this.stockService.createStock(this.stock)
          .subscribe((result: any) => {
            this.message = result.msg;
            this.initializeStock();
          }, (err: { error: { msg: null; }; }) => {
            this.message = err.error.msg;
          });
    } else {
      console.error('Stock form is in an invalid state');
    }
  }
}
