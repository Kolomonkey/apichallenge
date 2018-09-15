import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const BASE_URL = 'https://level-up-api-vuhmzxgkoy.now.sh/todos';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  constructor(private http: HttpClient) {}

  getTodos() {
    return this.http.get(`${BASE_URL}`);
  }

  selectTodo(todo) {
    return this.http.get(`${BASE_URL}/${todo.id}`);
  }

  createTodo(todo) {
    return this.http.post(`${BASE_URL}`, todo);
  }

  updateTodo(todo) {
    return this.http.patch(`${BASE_URL}/${todo.id}`, todo);
  }

  deleteTodo(todo) {
    return this.http.delete(`${BASE_URL}/${todo.id}`);
  }
}
