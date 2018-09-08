import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'api-snippets-view',
  templateUrl: './snippets-view.component.html',
  styleUrls: ['./snippets-view.component.css']
})
export class SnippetsViewComponent {

  @Input() allSnippets;

  @Output() selectSnippet = new EventEmitter();
  @Output() deleteSnippet = new EventEmitter();

}
