import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Todo } from '../Todo';
import { TODOS } from '../mock-todos';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor() { }

  /* (Method)
  getTodos(): Todo[] {
    return TODOS;
  } */
  // >>> Turned into Observable <<<
  getTodos(): Observable<Todo[]> {
    // return Observable Directly
    const todos = of(TODOS);
    return todos;
  }
}
