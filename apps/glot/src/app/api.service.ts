import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

const HEADERS = new HttpHeaders()
.set("Content-Type", "application/json")
.set("Authorization", "Token 305254c0-7990-493c-8413-6083329998cc")

const options = {
  headers: HEADERS
}

const BASE_URL = "https://snippets.glot.io";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getAllSnippets() {
    return this.http.get(`${BASE_URL}/snippets`, options)
  }

  getSnippet(snippet) {
    return this.http.get(`${BASE_URL}/snippets/${snippet}`)
  }

  createSnippet(data) {
    return this.http.post(`${BASE_URL}/snippets`, data, options)
  }

  updateSnippet(snippet, data) {
    return this.http.put(`${BASE_URL}/snippets/${snippet}`, data, options)
  }

  deleteSnippet(snippet) {
    return this.http.delete(`${BASE_URL}/snippets/${snippet}`, options)
  }
}
