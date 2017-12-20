import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {FormControl} from "@angular/forms";
import "rxjs/add/operator/debounceTime";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  private searchInput: FormControl = new FormControl();
  private birthday = new Date();
  private pi: number = 3.141592657;
  constructor() {
    Observable.from([1, 2, 3, 4]).filter(e => e % 2 === 0).map(e => e * e).subscribe(
      e => console.log(e),
      err => console.error(err),
      () => console.log('Finish!')
    );
    this.searchInput.valueChanges.debounceTime(500).subscribe(stockCode => this.getStockInfo(stockCode));
  }

  ngOnInit() {
  }

  onKey(event) {
    console.log(event.target.value);
  }
  onKey2(value: string) {
    console.log(value);
  }
  getStockInfo(value: string) {
    console.log(value);
  }
}
