import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'api-exchange-view',
  templateUrl: './exchange-view.component.html',
  styleUrls: ['./exchange-view.component.css']
})
export class ExchangeViewComponent {

  @Input() currencyPairs;

  @Output() selectPair = new EventEmitter();

}
