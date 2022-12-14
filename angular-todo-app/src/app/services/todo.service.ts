import { Injectable } from '@angular/core';
// [After] >>> Must Manually Add to app.module.ts HttpClientModule
import { HttpClient, HttpHeaders } from '@angular/common/http';

// [Before]: db.json
// [Removed] {, of} because HttpClient returns Observable
import { Observable } from 'rxjs';
import { Todo } from '../Todo';
// import { TODOS } from '../mock-todos';

// [HttpHeaders] NOTE: Can be imbedded within function or globally
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  // (private) Property for API URL
  private apiUrl = 'http://localhost:5000/todos'

  // NOTE: this.http >>> (Method) GET, POST, DELETE etc
  constructor(private http: HttpClient) { }

  /* (Method)
  getTodos(): Todo[] {
    return TODOS;
  } */
  // >>> Turned into Observable <<<
  getTodos(): Observable<Todo[]> {
    // return Observable Directly
    /* [Before]: private apiUrl + constructor()
    const todos = of(TODOS);
    return todos; */

    // NOTE: return (data) from database
    // ### [GET] Request ###
    return this.http.get<Todo[]>(this.apiUrl);
  }

  deleteTodo(todo: Todo): Observable<Todo> {
    // NOTE: delete request requires an id from apiUrl
    const url = `${this.apiUrl}/${todo.id}`;
    // ### [DEL] Request ###
    return this.http.delete<Todo>(url);
  }

  updateTodoImportant(todo: Todo): Observable<Todo> {
    const url = `${this.apiUrl}/${todo.id}`;
    // ### [PUT] Request ###
    // Sending data with headers containing content type (httpOptions)
    return this.http.put<Todo>(url, todo, httpOptions);
  }

  newTodo(todo: Todo): Observable<Todo> {
    // ### [POST] Request ###
    return this.http.post<Todo>(this.apiUrl, todo, httpOptions);
  }
}
