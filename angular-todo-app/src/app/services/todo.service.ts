import { Injectable } from '@angular/core';
// [After] >>> Must Manually Add to app.module.ts HttpClientModule
import { HttpClient, HttpHeaders } from '@angular/common/http';

// [Before]: db.json
import { Observable, of } from 'rxjs';
import { Todo } from '../Todo';
import { TODOS } from '../mock-todos';

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
}
