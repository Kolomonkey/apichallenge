import { ApiService } from './../api.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'api-snippets',
  templateUrl: './snippets.component.html',
  styleUrls: ['./snippets.component.css']
})
export class SnippetsComponent implements OnInit {

  allSnippets;
  selectedSnippetName;

  constructor(private api: ApiService) { }

  snippetForm = new FormGroup({
    title: new FormControl('', Validators.required),
    fileName: new FormControl('', Validators.required),
    content: new FormControl('', Validators.required),
    id: new FormControl(null)
  })

  submitForm(form) {
    const snippet = {"language": "plaintext", "title": form.title, "files": [{"name": `form.name`, "content": form.content}]}
    if(!form.id) {
      this.createSnippet(snippet)
    } else {
      this.updateSnippet(form.id, snippet)
    }
  }

  resetForm() {
    this.snippetForm.reset()
    this.selectedSnippetName = null;
  }

  ngOnInit() {
    this.getAllSnippets()
  }

  getAllSnippets() {
    this.api.getAllSnippets()
      .subscribe(res => this.allSnippets = res)
  }

  getSnippet(snippet) {
    this.api.getSnippet(snippet)
      .subscribe(res => {this.snippetForm.patchValue({
        title: (<any>res).title,
        fileName: (<any>res).files[0].name,
        content: (<any>res).files[0].content,
        id: (<any>res).id
      }), this.selectedSnippetName = (<any>res).title});
  }

  createSnippet(snippet) {
    this.api.createSnippet(snippet)
      .subscribe(res => this.getAllSnippets())
  }

  updateSnippet(snippet, data) {
    this.api.updateSnippet(snippet, data)
      .subscribe(res => this.getAllSnippets())
  }

  deleteSnippet(snippet) {
    this.api.deleteSnippet(snippet)
      .subscribe(res => this.getAllSnippets())
  }
}
