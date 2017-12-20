import { Injectable } from '@angular/core';

@Injectable()
export class StockService {

  constructor() { }
  private stocks: Stock[] = [
    new Stock(1, '第一只股票', 1.99, 3.5, '这是第一只股票, 是我在慕课网学习Angular入门实战时创建的1.', ['IT', '互联网']),
    new Stock(2, '第二只股票', 2.99, 4.5, '这是第二只股票, 是我在慕课网学习Angular入门实战时创建的2.', ['金融', '互联网']),
    new Stock(3, '第三只股票', 3.99, 2.5, '这是第三只股票, 是我在慕课网学习Angular入门实战时创建的3.', ['IT', '互联网']),
    new Stock(4, '第四只股票', 4.99, 1.5, '这是第四只股票, 是我在慕课网学习Angular入门实战时创建的.', ['金融', '互联网']),
    new Stock(5, '第五只股票', 5.99, 0.5, '这是第五只股票, 是我在慕课网学习Angular入门实战时创建的.', ['IT', '互联网']),
    new Stock(6, '第六只股票', 6.99, 4.0, '这是第六只股票, 是我在慕课网学习Angular入门实战时创建的.', ['IT', '金融']),
    new Stock(7, '第七只股票', 7.99, 3.0, '这是第七只股票, 是我在慕课网学习Angular入门实战时创建的.', ['IT', '互联网']),
    new Stock(8, '第八只股票', 8.99, 5.0, '这是第八只股票, 是我在慕课网学习Angular入门实战时创建的.', ['IT', '金融', '互联网']),
  ];
  getStocks(): Stock[] {
    return this.stocks;
  }
  getStock(id: number): Stock {
    let stock = this.stocks.find(_stock => _stock.id == id);
    if (!stock) {
      stock = new Stock(null, null, null, null, null, []);
    }
    return stock;
  }
}

export class Stock {
  constructor(
    public id: number,
    public name: string,
    public price: number,
    public rating: number,
    public desc: string,
    public category: Array<string>
  ) {

  }
}
