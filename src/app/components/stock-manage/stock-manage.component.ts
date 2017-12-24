import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { Stock, StockService } from "../../service/stock.service";
import { FormControl } from "@angular/forms";
import "rxjs/add/operator/debounceTime";

@Component({
  selector: 'app-stock-manage',
  templateUrl: './stock-manage.component.html',
  styleUrls: ['./stock-manage.component.css']
})
export class StockManageComponent implements OnInit {

  private stocks: Array<Stock>;

  private nameFilter: FormControl = new FormControl();

  private keyWork: string;

  constructor(public router: Router, private stockService: StockService) {
  }

  ngOnInit() {
    this.stocks = this.stockService.getStocks();
    this.nameFilter.valueChanges.debounceTime(500).subscribe(value => this.keyWork = value);
  }

  create() {
    this.router.navigateByUrl('/stock/0');
    console.log(this.router.url);
  }

  update(stock: Stock) {
    this.router.navigateByUrl(`/stock/${stock.id}`);
  }
}

