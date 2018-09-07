import { Component, Input } from '@angular/core';

@Component({
  selector: 'api-exchange-details',
  templateUrl: './exchange-details.component.html',
  styleUrls: ['./exchange-details.component.css']
})
export class ExchangeDetailsComponent {

  @Input() selectedPair;

}
