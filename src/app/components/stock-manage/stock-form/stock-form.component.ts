import { Component, OnInit } from '@angular/core';
import {Stock, StockService} from "../../../service/stock.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-stock-form',
  templateUrl: './stock-form.component.html',
  styleUrls: ['./stock-form.component.css']
})
export class StockFormComponent implements OnInit {

  public stock: Stock;
  constructor(private routeInfo: ActivatedRoute, private stockService: StockService, private router: Router) { }

  ngOnInit() {
    const stockId = this.routeInfo.snapshot.params['id'];
    this.stock = this.stockService.getStock(stockId);
    console.log(this.stock);
  }

  cancel() {
    this.router.navigateByUrl('/stock');
  }
  save() {
    this.router.navigateByUrl('/stock');
  }
}
