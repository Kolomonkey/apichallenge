import { ApiService } from './../api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'api-exchange',
  templateUrl: './exchange.component.html',
  styleUrls: ['./exchange.component.css']
})
export class ExchangeComponent implements OnInit {

  currencyPairs;
  selectedPair;

  constructor(private api: ApiService) { }

  ngOnInit() {
    this.getCurrencyPairs();
  }

  getCurrencyPairs() {
    this.api.currencyPairs()
      .subscribe(res =>
        {
          this.currencyPairs = Object.values(res).splice(13,12),
          this.currencyPairs = this.currencyPairs.map(pair => pair = pair.substr(3))
        });
  }

  getSelectedPair(pair) {
    pair = 'USD' + pair.substr(0)
    this.api.currencyDetails(pair)
      .subscribe(res => {
        this.selectedPair = res[0]
        this.selectedPair.firstCurrency = this.selectedPair.symbol.substr(0,3)
        this.selectedPair.lastCurrency = this.selectedPair.symbol.substr(3)
      });
  }
}
