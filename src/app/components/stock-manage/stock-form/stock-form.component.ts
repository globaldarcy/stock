import { Component, OnInit } from '@angular/core';
import {Stock} from "../stock-manage.component";

@Component({
  selector: 'app-stock-form',
  templateUrl: './stock-form.component.html',
  styleUrls: ['./stock-form.component.css']
})
export class StockFormComponent implements OnInit {

  public stock: Stock;
  constructor() { }

  ngOnInit() {
    this.stock = new Stock(100, 'Apple', 500, 5, '苹果股票', ['Phone', 'Mac', 'Pad']);
  }

}
