import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'api-snippets-details',
  templateUrl: './snippets-details.component.html',
  styleUrls: ['./snippets-details.component.css']
})
export class SnippetsDetailsComponent {

  @Input() selectedSnippetName;
  @Input() snippetForm;

  @Output() submitForm = new EventEmitter();
  @Output() resetForm = new EventEmitter();

}
