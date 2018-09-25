import { VideogameFacade } from '@api/common-data';
import { Observable } from 'rxjs';
import { Component } from '@angular/core';

@Component({
  selector: 'api-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  loading$: Observable<boolean> = this.videogameFacade.loading$;

  constructor(private videogameFacade: VideogameFacade) {}

  lol() {
    console.log(this.loading$);
  }
}
