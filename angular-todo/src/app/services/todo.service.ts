import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Todo } from '../models/Todo';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  todosUrl: string = "http://localhost:3003/todos";

  constructor(private http: HttpClient) { }

  getTodosFromDB(): Observable<Todo[]> {
    return this.http.get<Todo[]>(this.todosUrl)
  }

  postTodoToDB(todo: Todo): Observable<Todo> {
    const url = this.todosUrl;
    const body = todo;
    const options = { headers: { 'Content-type': 'application/json' } }
    return this.http.post<Todo>(url, body, options);
  }

  putTodoToDB(todo: Todo): Observable<Todo> {
    const url = `${this.todosUrl}/${todo.id}`
    const body = todo
    const options = {
      // headers: new HttpHeaders({ 'Content-type': 'application/json' })
      headers: { 'Content-type': 'application/json' }
    }
    return this.http.put<Todo>(url, body, options)
  }

  deleteTodoFromDB(todo: Todo): Observable<Todo> {
    const url = `${this.todosUrl}/${todo.id}`;
    return this.http.delete<Todo>(url)
  }
}
